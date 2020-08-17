import { sanitizeObject } from "../../../services/sanitizer";

export function get(req, res, next) {
  const { name } = req.params;
  const elem = res.db.get("users").find({ username: name }).value();
  if (elem !== undefined) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(elem));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}

export function post(req, res) {
  req.needAuth();
  res.dbUpdate("users", sanitizeObject(req.body, { content: true }));
}
