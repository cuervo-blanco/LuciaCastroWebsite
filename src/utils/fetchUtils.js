export const fetchPostsForPage = async (pageNumber) => {
    try {
        const response = await fetch(`http://localhost:3002/api/blog/page/${pageNumber}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
           throw new Error(`Error deleting blog post to website's server: ${response.status}`);
        }

        const result = await response.json();

        return result;

    } catch (error) {
        console.error('Error deleting the blog post', error);

        throw error;
    }
}
