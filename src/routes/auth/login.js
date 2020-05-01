import { login, authenticate } from '../../services/auth';

export function post(req, res, next) {
    // avoid double login
    if (res.isAuthenticated) return res.ok();
    const { username, password } = req.body;
    login(username, password).then(token => {
        authenticate(req, res, token);
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Set-Cookie': `Authorization=${req.authToken}`
        });
        res.end(JSON.stringify({message: 'ok'}));
    }).catch(e => {
        res.error(401, e.toString());
    })
}