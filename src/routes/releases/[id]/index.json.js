import { db } from "../../../services/db";

export function get(req, res, next) {
  const { id } = req.params;
  res.dbGet("releases", id);
}

export function post(req, res) {
  req.needAuth();
  // TODO: check that
  res.dbUpdate('releases', req.body);
}
