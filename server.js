require('dotenv').config();

let express =  require('express');
const next = require('next');
const pool = require('./db');
const path = require('path');
const os = require('os');
const fs = require('fs');
const admin = require('firebase-admin');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const multer = require('multer');
const serviceAccount = require('./private/my-website-26cef-firebase-adminsdk-hwavs-5e47e95ea7.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'my-website-26cef.appspot.com'
});

const bucket = admin.storage().bucket();


//let bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.prepare().then(() => {
const server = express();

const upload = multer({ dest: 'uploads/' })
	
	server.use(cors());
	
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

// Upload file to Firebase Storage
server.post('/upload', upload.single('file'), (req, res) => {
	console.log(req.file);
	const file = req.file;
	if (!file) {
		console.log('Yo');
		return res.status(400).send('No file uploaded.');
	}

	const tempFilePath = path.join(__dirname, 'uploads', file.filename);
	console.log('path: ', tempFilePath);
	console.log(file.originalname);
	const uploadToFirebase = async () => {
		await bucket.upload(tempFilePath, {
			destination: `uploads/${file.originalname}`,
		});
		fs.unlinkSync(tempFilePath); //Clean up temp file
		res.send('File uploaded to Firebase successfully.'); 
	};

	uploadToFirebase().catch(console.error);
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
