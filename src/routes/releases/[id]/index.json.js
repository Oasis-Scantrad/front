export function get(req, res, next) {
  const { id } = req.params;
  res.dbGet("releases", id);
}

export function post(req, res) {
  req.needAuth();
  res.dbUpdate('releases', req.body);
}
