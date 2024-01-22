const pool = require('./db'); // import your database pool

const saveImageDB = async (publicUrl, altText, originalName) => {
    try {
        const query = 'INSERT INTO images(url, alt, original_name) VALUES($1, $2, $3)';
        const values = [publicUrl, altText, originalName];
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

async function getOriginalName(imgUrl) {
	try {
		const result = await pool.query('SELECT original_name FROM images WHERE url = $1', [imgUrl]);
        if (result.rows.length > 0) {
            return result.rows[0].original_name; // Return the original_name of the first row
        } else {
            throw new Error('No matching image found for the provided URL.');
        }	
	} 

	catch (err) { 
		console.error('Error getting image original name from database', err.stack);
		throw err;
	}
}

async function deleteImageDB(imgUrl) {
	try {
		const result = await pool.query('DELETE FROM images WHERE url = $1', [imgUrl]);
		if (result.rowCount === 0) {
            // No rows were deleted, this means the image URL was not found
            return { success: false, message: "No image found with the provided URL." };
        } else {
            // Rows were deleted
            return { success: true, message: `${result.rowCount} image(s) deleted successfully.` };
        }
	} catch { 
		console.error('Error deleting image from database', err.stack);
		throw err;
	}
}


async function updateIllustrations(illustrations) {

			const client = await pool.connect();		// get client from pool

		try{

			await client.query('BEGIN'); // start transaction

			for (const illustration of illustrations) {

				//Find image_id
				const imageRes = await client.query('SELECT image_id FROM images WHERE url = $1', [illustration.src]);
				const imageId = imageRes.rows[0]?.image_id;

				const insertQuery = `INSERT INTO illustrations (connection_id, src, alt, link, image_id) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (connection_id) DO UPDATE SET src = EXCLUDED.src, alt = EXCLUDED.alt, link = EXCLUDED.link, image_id = EXCLUDED.image_id;`;
				const values = [illustration.connection_id, illustration.src, illustration.alt, illustration.link, imageId];
				await client.query(insertQuery, values);
				}

			await client.query('COMMIT');

			} catch(err){
				await client.query('ROLLBACK');
				console.error('Transaction ROLLBACK due to error', err);
				throw err;
			} finally {
				client.release();
			}
}

async function getIllustrations() {
		try{
			const result = await pool.query('SELECT connection_id, src, alt, link FROM illustrations ORDER BY connection_id');
			return result.rows;
		} catch(err) {
			console.error('Error getting illustrations', err.stack);
			throw err;
		}

}


module.exports = {
    saveImageDB,
	getImageList,
	getOriginalName, 
	deleteImageDB,
	updateIllustrations,
	getIllustrations
};

