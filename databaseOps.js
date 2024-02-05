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


async function updateContent(content) {

console.log(content);

	const client = await pool.connect();// get client from pool

		try{

			await client.query('BEGIN'); // start transaction

			for (const item of content) {
					if (item.action === 'delete') {

						let table = '';
				if (item.section_id === 'p&s: illustrations' || item.section_id === 'p&s: 2d animation & motion graphics' || item.section_id === 'p&s: character design' || item.section_id === 'press'){
							table = 'media_info_cards';	
						}
						else if (item.section_id ===  'clients'){
							table = 'client_quotes';
						} else if (item.section_id === 'p&s: posters'){
							table = 'illustrations';
						} 
							const deleteQuery = `DELETE FROM ${table} WHERE connection_id = $1`;
							const deleteValue = [item.connection_id];
							await client.query(deleteQuery, deleteValue);
							continue;
						}


				if (item.section_id === 'p&s: illustrations' || item.section_id === 'p&s: 2d animation & motion graphics' || item.section_id === 'p&s: character design' || item.section_id === 'press') {
					const imageRes = await client.query('SELECT image_id FROM images WHERE url = $1', [item.src]);
					const imageId = imageRes.rows[0]?.image_id;

					const mediaInfoCardInsert = `INSERT INTO media_info_cards (connection_id, src, alt, link, image_id, section_id, title, description, subtitle, published_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) ON CONFLICT (connection_id) DO UPDATE SET src = EXCLUDED.src, alt = EXCLUDED.alt, link = EXCLUDED.link, image_id = EXCLUDED.image_id, section_id = EXCLUDED.section_id, title = EXCLUDED.title, description = EXCLUDED.description, subtitle = EXCLUDED.subtitle, published_date = EXCLUDED.published_date`;
					const values = [item.connection_id, item.src, item.alt, item.link, imageId, item.section_id, item.title, item.description, item.subtitle, item.published_date];
					await client.query(mediaInfoCardInsert, values);

				} else if (item.section_id === 'illustrations' || item.section_id === 'p&s: posters') {
						//Find image_id
					const imageRes = await client.query('SELECT image_id FROM images WHERE url = $1', [item.src]);
					const imageId = imageRes.rows[0]?.image_id;
					const insertQuery = `INSERT INTO illustrations (connection_id, src, alt, link, image_id, section_id) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (connection_id) DO UPDATE SET src = EXCLUDED.src, alt = EXCLUDED.alt, link = EXCLUDED.link, image_id = EXCLUDED.image_id, section_id = EXCLUDED.section_id;`;
					const values = [item.connection_id, item.src, item.alt, item.link, imageId, item.section_id];
					await client.query(insertQuery, values);
				} else if (item.section_id === 'clients') {
				const insertQuery = 'INSERT INTO client_quotes (connection_id, section_id, link, description, subtitle) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (connection_id) DO UPDATE SET section_id = EXCLUDED.section_id, link = EXCLUDED.link, description = EXCLUDED.description, subtitle = EXCLUDED.subtitle';
					const values = [item.connection_id, item.section_id, item.link, item.description, item.subtitle];
					await client.query(insertQuery, values);
					}
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

async function getContent() {
		try{
			const illustrationsResult = await pool.query(`SELECT connection_id, src, alt, link, section_id  FROM illustrations WHERE section_id = 'illustrations' ORDER BY connection_id`);
			const postersResult = await pool.query(`SELECT connection_id, src, alt, link, section_id FROM illustrations WHERE section_id = 'p&s: posters' ORDER BY published_date`);
			 const mediaInfoCardsResult = await pool.query('SELECT connection_id, src, alt, link, section_id, title, description, subtitle, published_date FROM media_info_cards ORDER BY published_date' );

			const clientQuotes = await pool.query('SELECT connection_id, section_id, link, description, subtitle FROM client_quotes ORDER BY quote_id');

			const combinedResult = [...illustrationsResult.rows, ...mediaInfoCardsResult.rows, ...clientQuotes.rows, ...postersResult.rows];
			return combinedResult;
		} catch(err) {
			console.error('Error getting content', err.stack);
			throw err;
		}

}

async function updatePost(post) {
	//receiving a draft or edit (object), checking if its existent on the database already and updating or uploading into the draft_version column based on the post_id

	try {
		const postExistsResult = await pool.query(`SELECT EXISTS(SELECT 1 FROM posts where post_id = $1) AS exists`, [post.post_id]);
		const postExists = postExistsResult.rows[0].exists;		
		
		const values = [post.post_id,  post.draft_version,  post.author, post.status, post.seo_metadata];

			if (!postExists) {
				const query ='INSERT INTO posts(post_id, draft_version, author, status, seo_metadata) VALUES ($1, $2, $3, $4, $5, $6, $7)';
				const result = await pool.query(query, values);
				return result;
			} else {
				const query = 'INSERT INTO posts(post_id, draft_version, author,  status, seo_metadata) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (post_id) DO UPDATE SET  draft_version = EXCLUDED.draft_version, author = EXCLUDED.author, status = EXCLUDED.status, seo_metadata = EXCLUDED.seo_metadata';
				const result = await pool.query(query, values);
				return result;
			}
	} catch (err) {
		console.error('Error saving post', err.stack);	
		throw err;
	}

}

async function publishPost (postId) {
	try {
		//copy the post from the draft_version to the published_version	
		const draftVersion = await database.query('SELECT draft_version FROM posts WHERE post_id = $1', [postId]);	

		await database.query('UPDATE posts SET published_version = $1, status = $2 WHERE post_id = $3', [draftVersion, 'published', postId]);

		return 'Post updated successfully';

	} catch (error) {
		console.error('Error publishing post', error)
		throw error;
	}
}



module.exports = {
    saveImageDB,
	getImageList,
	getOriginalName, 
	deleteImageDB,
	updateContent,
	getContent,
	updatePost,
	publishPost
};

