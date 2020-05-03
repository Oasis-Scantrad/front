export function get(req, res) {
  if (!req.auth.logged) res.ok("Not logged");
  else res.logout();
}
