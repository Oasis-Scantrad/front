const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const shortid = require("shortid");

const adapter = new FileSync("db.json");
const dbLow = low(adapter);

export const db = dbLow.defaults({ releases: [], users: [], news: [] });

export const database = (req, res, next) => {
  res.db = db;
  res.dbGet = (document, id) => {
    const elem = db.get(document).find({ id }).value();
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
  };
  res.dbUpdate = (document, data) => {
    const elem = db.get(document).find({ id: data.id });
    if (elem.value() !== undefined) {
      try {
        elem.assign(data).write();
        res.ok();
      } catch (e) {}
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
  };
  res.dbCreate = (document, data) => {
    try {
      const id = shortid.generate();
      db.get(document).push(Object.assign({ id }, data)).write();
      res.writeHead(201, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ message: "Ok" }));
    } catch (e) {
      res.writeHead(500, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ message: e }));
    }
  };
  next();
};
