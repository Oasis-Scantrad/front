import { db } from "./db";
import crypto from "crypto";
import * as jwt from "jsonwebtoken";
import { fill } from "./db-fill";
import { generate } from "shortid";

const salty = (password) => `${password}/${process.env.SALT2}`;

const hashPass = (password) =>
  crypto
    .createHmac("sha256", process.env.SALT)
    .update(salty(password))
    .digest("hex");

const makeToken = (user, session = {}) => {
  return jwt.sign(
    Object.assign({ userId: user.id, username: user.username }, session),
    process.env.JWT_KEY,
    { expiresIn: "1d" }
  );
};
/**
 * try to login using credentials
 * @param {string} username
 * @param {string} password
 * @return {Promise<JWT>}
 */
export async function login(username, password) {
  const user = db
    .get("users")
    .find({
      username: username,
      passwordHash: hashPass(password),
    })
    .value();
  if (user === undefined) throw new Error("Could not login using credentials");
  return makeToken(user);
}

export async function signin(username, password, description = "", roles = []) {
  if (db.get("users").find({ username: username }).value())
    throw new Error("User already exists");
  db.get("users")
    .push({
      username,
      id: generate(),
      passwordHash: hashPass(password),
      roles,
      description,
    })
    .write();
}

export const authenticate = (req, res, token = req.cookies.authToken) => {
  req.auth = req.auth || {
    logged: false,
  };
  if (req.auth.token !== undefined) {
    return true;
  }
  try {
    if (!token) return false;
    req.auth.session = jwt.verify(token, process.env.JWT_KEY);
    req.auth.token = token;
    req.auth.logged = true;
    return true;
  } catch (error) {
    res.logout({ error });
  }
};

export function auth(req, res, next) {
  if (db.get("users").find({ username: "admin" }).value() === undefined) {
    signin("admin", "admin"); // TODO: change that ;)
    fill(db);
  }
  authenticate(req, res);

  req.needAuth = () => {
    if (req.auth.logged) return;
    res.writeHead(401, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Unauthorized`,
      })
    );
  };
  req.needRole = (role) => {
    if (!req.auth.logged || !req.auth.session.roles.includes(role)) {
      res.writeHead(401, {
        "Content-Type": "application/json",
      });
      res.end(
        JSON.stringify({
          message: `Unauthorized`,
        })
      );
    }
  };
  res.logout = (data = { message: "Successfully logged out" }, code = 200) => {
    res.writeHead(code, {
      "Content-Type": "application/json",
      "Set-Cookie": `authToken=delete; Path=/; Max-Age=0`,
    });

    res.end(JSON.stringify(data));
  };
  res.login = () => {
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Set-Cookie": `authToken=${req.auth.token}; Path=/; HttpOnly`,
    });
    res.end(JSON.stringify({ message: "ok", auth: req.auth }));
  };
  next();
}
