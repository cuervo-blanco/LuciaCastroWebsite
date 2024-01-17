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

module.exports = {
    saveImageDB
};

