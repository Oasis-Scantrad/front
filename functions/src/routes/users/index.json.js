import { signin } from "../../services/auth";

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify(
      res.db
        .get("users")
        .values()
        .map((u) => {
          delete u.passwordHash;
          return u;
        })
        .reverse()
    )
  );
}

export function post(req, res) {
  req.needRole("admin");
  signin(req.username, req.password, req.description, req.roles);
}
