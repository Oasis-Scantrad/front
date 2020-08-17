import { login, authenticate } from "../../services/auth";

export function post(req, res) {
  // avoid double login
  if (req.auth.logged) return res.ok();
  const { username, password } = req.body;
  login(username, password)
    .then((token) => {
      authenticate(req, res, token);
      res.login();
    })
    .catch((e) => {
      res.error(401, e.toString());
    });
}
