import { db } from "../../services/db";

export async function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(db.get("news").values().reverse()));
}


export function post(req, res) {
  req.needAuth();
  res.dbCreate('news', req.body);
}
