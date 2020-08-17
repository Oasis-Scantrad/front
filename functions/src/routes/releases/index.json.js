import { db } from "../../services/db";

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(db.get("releases").values().reverse()));
}


export function post(req, res) {
  req.needAuth();
  res.dbCreate('releases', req.body);
}
