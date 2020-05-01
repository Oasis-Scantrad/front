import { login, authenticate } from '../../services/auth';

export function post(req, res, next) {
    // avoid double login
    if (res.isAuthenticated) return res.ok();
    const { username, password } = req.body;
    login(username, password).then(token => {
        authenticate(res, req, token);
        res.ok();
    }).catch(e => {
        res.error(401, e.toString());
    })
}