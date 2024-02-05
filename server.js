require('dotenv').config();
	
let express =  require('express');
const next = require('next');
const pool = require('./db');
const path = require('path');
const os = require('os');
const fs = require('fs');
const admin = require('firebase-admin');
const cors = require('cors');
const { saveImageDB, getImageList, deleteImageDB, getOriginalName, updateContent, getContent, updatePost, publishPost } = require('./databaseOps');
const { Server } = require('socket.io');
const http = require('http');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const multer = require('multer');
const serviceAccount = require('./private/my-website-26cef-firebase-adminsdk-hwavs-5e47e95ea7.json');



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.STORAGE_BUCKET
});

const bucket = admin.storage().bucket();


//let bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.prepare().then(() => {
const server = express();
const httpServer = http.createServer(server);
const io = new Server(httpServer, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

	io.on('connection', (socket) => {
		console.log('a user connected', socket.id);

		socket.on('disconnect', () => {
			console.log('a user disconnected', socket.id);
		});
	});


const upload = multer({ dest: 'uploads/' })
	
	server.use(cors());
	server.use(express.json());
	
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

server.post('/upload', upload.single('file'), async (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    const tempFilePath = path.join(__dirname, 'uploads', file.filename);
    
    try {
        const uploadedFile = await bucket.upload(tempFilePath, {
            destination: `uploads/${file.originalname}`
        });

        const fileUrl = await uploadedFile[0].getSignedUrl({
            action: 'read',
            expires: '03-09-2491' //far future
        });

        const publicUrl = fileUrl[0];
        const dbResult = await saveImageDB(publicUrl, req.body.alt, file.originalname); // Assuming saveImageDB is properly defined elsewhere

        // Clean up the temporary file
        fs.unlink(tempFilePath, (err) => {
            if (err) {
                console.error(`Error deleting temp file: ${err.message}`);
            }
        });
		io.emit('image-uploaded', { message: 'New image uploaded'});

        // Send a successful response
        res.send({ message: 'File uploaded successfully', url: publicUrl, dbResult: dbResult });
    } catch (error) {
        console.error(error.message);
        // Clean up the temporary file even if there was an error
        fs.unlink(tempFilePath, (err) => {
            if (err) {
                console.error(`Error deleting temp file: ${err.message}`);
            }
        });
        
        // Send an error response
        res.status(500).send({ error: error.message });
    }
});

server.post('/delete-image', async (req, res) => {

		const imgUrl = req.body.imgUrl;
		
		if (!imgUrl) {
			return res.status(400).send('No image URL provided.');
		}

	try {

		//query database to get original name of file from url
		const originalName = await getOriginalName(imgUrl);
		//delete from firebase storage
		//
		const file = bucket.file(`uploads/${originalName}`); // The path to your file in Firebase Storage
		await file.delete();
		//delete from database
		const dbResult = await deleteImageDB(imgUrl); 
		
		io.emit('image-deleted', { message: 'Image was deleted'});

		res.send({ message: 'Image deleted successfully', dbResult });
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ error: error.message })
	}

} );

server.post('/update-content', async (req, res) => {
	try {
		const content = req.body.content;
		const result = await updateContent(content);
		res.status(200).json({ message: 'Content updated successfully', result });
	} catch (error){
		console.error(error.message);
	res.status(500).send({  error: error.message })
	}
});

server.get('/get-content', async (req, res) => {
	
 try {
      const content = await getContent();
      res.json(content);
    } catch (error) { 
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

server.post('/save-blog-post', async (req, res) => {
	try {
		const blogPost = req.body.post;
		const result = await updatePost(blogPost);
		res.status(200).json({ message: 'Content updated successfully', result });
	} catch (error){
		console.error(error.message);
		res.status(500).send( { error: error.message } )
	}
});

server.post('/publish-post', async (req, res) => {
	try {
		const postId = req.body.postId;
		const result = await publishPost(postId);
		res.status(200).json({ message: 'Post published successfully', result });
	} catch (error){
		console.error(error.message);
		res.status(500).send({ error: error.message })
	}
});

server.get('/image-list', async (req, res) => {
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 24;
	try {
	const result = await getImageList(page, limit);
		res.json(result);
	} catch (error) {
	res.status(500).send(err.message);
	}
});

// Next.js page handling
  server.get('*', (req, res) => {
    return handle(req, res);
  });


const PORT = process.env.PORT || 3000;


httpServer.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${PORT}`);
});

});
	});
