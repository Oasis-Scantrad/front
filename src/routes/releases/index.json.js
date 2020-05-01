import { db } from '../../services/db'

export async function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify(db.get('releases').values()));
}