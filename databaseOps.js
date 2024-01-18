const pool = require('./db'); // import your database pool

const saveImageDB = async (publicUrl, altText) => {
    try {
        const query = 'INSERT INTO images(url, alt) VALUES($1, $2)';
        const values = [publicUrl, altText];
        const result = await pool.query(query, values);
        return result.rows; // rows contain the query results
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err; // Rethrow the error for further handling
    }
};

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

module.exports = {
    saveImageDB,
	getImageList
};

