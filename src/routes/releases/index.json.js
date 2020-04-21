import releases from './[id]/_releases'

const contents = JSON.stringify(releases);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}