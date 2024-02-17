import { fetchPostsForPage } from '../path/to/your/fetching/logic';
import Link from 'next/link';

// Page component for dynamic route
export default function BlogPage({ posts, page }) {

    let rows = 4;
    let columns = 4;

	const grid = [];

	for (let r = 0; r < rows; r++){
	let row = [];

		for (let c = 0; c < columns; c++){
			const index = r * columns + c ;
			const post = posts[index];

			if (post) {
				row.push(
                <BlogPostPreview key={`post-${c}-${r}`}
                                 img={post.published_version.featured_image}
                                 title={post.published_version.title}
                                 description={post.published_version.description}
                                 slug={post.published_version.slug}
                                 date={post.published_date}
                                 author={post.author}/>
				);
			}
		}
		if (row.length > 0) {
		grid.push(
			<div key={`grid-${r}`} className={styles.blogPostRow}>{row}</div>
			);
		}
	}

  return (
    <div>
      {/* Render blog posts */}
      {posts.map(post => (
        <div key={post.id}>{/* Post content */}</div>
      ))}
      {/* Pagination links */}
      <Link href={`/blog/page/${parseInt(page, 10) - 1}`}><a>Previous</a></Link>
      <Link href={`/blog/page/${parseInt(page, 10) + 1}`}><a>Next</a></Link>
    </div>
  );
}

// Fetch posts based on page number
export async function getStaticProps({ params }) {
  const page = parseInt(params.page, 10);
  const posts = await fetchPostsForPage(page);
  return { props: { posts, page } };
}

// Define static paths (pre-rendered pages)
export async function getStaticPaths() {
  const totalPages = /* logic to calculate total pages */;
  const paths = Array.from({ length: totalPages }, (_, i) => ({ params: { page: String(i + 1) } }));
  return { paths, fallback: 'blocking' };
}

