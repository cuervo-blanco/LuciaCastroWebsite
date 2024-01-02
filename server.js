require('dotenv').config();

let express =  require('express');
const next = require('next');
const pool = require('./db');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


//let bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.prepare().then(() => {
const server = express();
	
	pool.connect((err, client, release) => {
    if (err) {
      throw new Error(`Database connection error: ${err.stack}`);
    }
    console.log('Database Connected Successfully');
    release();

server.get('/api/gallery', (req, res) => {
	/* fetch and send gallery images */
	res.send({ send: true })
});

server.get('/api/bio', (req, res) => {
	/* fetch and send html text & images */
		res.send({ send: true })					
});

server.get('/api/blog', (req, res) => {
	/* fetch and send blog post previews as object */
	res.send({ send: true })
});

server.get('/api/blog/blog-posts-ids', (req, res) => {
	/* fetch and send an array containing the blog post ids  */
	res.send({ send: true })
});

server.get('/api/blog/:postId', (req, res) => {
	/* fetch and send blog post text, images etc.  */
	res.send({ send: true })
});


server.get('/api/shop', (req, res) => {
	/* fetch and send shop items previews */
	res.send({ send: true })
});


// Next.js page handling
  server.get('*', (req, res) => {
    return handle(req, res);
  });


const PORT = process.env.PORT || 3000;
server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${PORT}`);
});

});
	});
