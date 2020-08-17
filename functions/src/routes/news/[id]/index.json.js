import {sanitizeObject} from '../../../services/sanitizer'

export function get(req, res, next) {
  const { id } = req.params;
  res.dbGet("news", id);
}

export function post(req, res) {
  req.needAuth();
  res.dbUpdate("news", sanitizeObject(req.body,{content:true}));
}
