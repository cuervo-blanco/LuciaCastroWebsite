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

async function getOriginalName(imgUrl) {
	try {
		const result = await pool.query('SELECT original_name FROM images WHERE url = $1', [imgUrl]);
        console.log('Original name query result: ', result.rows[0]);
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

module.exports = {
    saveImageDB,
	getImageList,
	getOriginalName, 
	deleteImageDB
};

