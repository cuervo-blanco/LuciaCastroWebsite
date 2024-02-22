export const fetchPostsForPage = async (pageNumber) => {
    try {
        const response = await fetch(`http://localhost:3002/blog/page/${pageNumber}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
           throw new Error(`Error getting blog posts from website's server: ${response.status}`);
        }

        const result = await response.json();

        return result;

    } catch (error) {
        console.error('Error getting the blog posts', error);
        throw error;
    }
}
