require('dotenv').config();
console.log("Path of loaded .env file:", process.env.PWD);
const { Pool } = require('pg');

const poolConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
};

if (process.env.DB_PASSWORD) {
    poolConfig.password = process.env.DB_PASSWORD;
}

const pool = new Pool(poolConfig);



// Function to get pages for a user
async function getImageList(page, limit) {
  // Database query to get pages
	
	const offset = (page - 1) * limit;

	try {
        const images = await pool.query('SELECT * FROM images ORDER BY upload_date DESC LIMIT $1 OFFSET $2', [limit, offset]);
		console.log('Images: ', images.rows);
		const count = await pool.query('SELECT COUNT(*) FROM images');
		const data = {
			images: images.rows,
			totalPages: Math.ceil(count.rows[0].count / limit),
			currentPage: page
		}
        return data; // rows contain the query results
    } catch (err) {
        console.error('Error in getting images query', err.stack);
        throw err; // Rethrow the error for further handling
    }
}

module.exports = {getImageList, pool};

