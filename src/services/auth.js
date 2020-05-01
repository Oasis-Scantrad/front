import { db } from './db'
import crypto from 'crypto';
import * as jwt from 'jsonwebtoken'
import { fill } from './db-fill';
import { generate } from 'shortid'

const salty = (password) => `${password}/${process.env.SALT2}`;

const hashPass = (password) => crypto.createHmac('sha256', process.env.SALT)
    .update(salty(password))
    .digest('hex')

const makeToken = (user, session = {}) => {
    return jwt.sign(
        Object.assign({ userId: user._id, username: user.username }, session),
        process.env.JWT_KEY,
        { expiresIn: '1d' }
    )
}
/**
 * try to login using credentials
 * @param {string} username 
 * @param {string} password 
 * @return {Promise<JWT>}
 */
export async function login(username, password) {
    const user = db.get('users').find({
        username: username,
        passwordHash: hashPass(password)
    }).value();
    if (user === undefined) throw new Error('Could not login using credentials');
    return makeToken(user);
}

export async function signin(username, password) {
    if (db.get('users').find({ username: username }).value())
        throw new Error('User already exists');
    db.get('users').push({ username, id: generate(), passwordHash: hashPass(password) }).write();
}

export const authenticate = (req, res, token) => {
    
    token = token || req.cookies.Authorization;
    if (req.authToken !== undefined) {
        return true;
    }
    try {
        if (!token) return false;
        req.session = jwt.verify(token, process.env.JWT_KEY)
        req.authToken = token;
        req.isAuthenticated = true;
        return true;
    } catch (e) {
        req.isAuthenticated = false;
        return e;
    }
}

export function auth(req, res, next) {
    if (db.get('users').find({ username: 'admin' }).value() === undefined) {
        signin('admin', 'admin'); // TODO: change that ;)
        fill(db);
    }
    authenticate(req, res);
    req.needAuth = () => {
        if (req.isAuthenticated) return;
        res.writeHead(401, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: `Unauthorized`
        }));
    }
    next();
}