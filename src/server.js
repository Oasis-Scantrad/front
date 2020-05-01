import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { database } from './services/db';
import { auth } from './services/auth';
import * as bodyParser from 'body-parser';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		bodyParser.json(),
		(req, res, next) => {
			res.ok = () => {
				res.writeHead(200, {
					'Content-Type': 'application/json'
				});
				res.end(JSON.stringify({ message: 'Ok' }));
			}
			res.error = (code, text) => {
				res.writeHead(code, {
					'Content-Type': 'application/json'
				});
				res.end(JSON.stringify({ message: text }));
			}
			next();
		},
		database,
		auth,
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
