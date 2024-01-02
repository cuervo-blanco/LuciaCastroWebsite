let express =  require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

//require('dotenv').config();
//let bodyParser = require('body-parser');


//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
server.prepare().then(() => {
const server = express();

server.get('/api/gallery', (req, res) => {
	/* fetch and send gallery images */
	res.send({ send: true })
});

server.get('/api/bio', (req, res) => {
	/* fetch and send html text & images */
});

server.get('/api/blog', (req, res) => {
	/* fetch and send blog post previews as object */
});

server.get('/api/blog/blog-posts-ids', (req, res) => {
	/* fetch and send an array containing the blog post ids  */
});

server.get('/api/blog/:postId', (req, res) => {
	/* fetch and send blog post text, images etc.  */
});


server.get('/api/shop', (req, res) => {
	/* fetch and send shop items previews */
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
