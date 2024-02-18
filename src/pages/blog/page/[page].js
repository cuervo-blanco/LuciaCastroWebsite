import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../styles/BlogPage.module.scss';
import { fetchPostsForPage } from '../../../utils/fetchUtils';
import BlogPostPreview from '../../../components/BlogPostPreview';

// Page component for dynamic route
export default function BlogPage({ posts, page, totalPages, totalPosts }) {

    const router = useRouter();

    const handlePrevious = (currentPage) => {
        const previousPage = currentPage - 1;

        if (previousPage !== 1){
            router.push(`/blog/page/${previousPage}`)
        } else {
            router.push(`/blog`);
        }
    }

    const handleNext = (currentPage) => {
        const nextPage = currentPage + 1;
        router.push(`/blog/page/${nextPage}`)
    }

    let rows = 2;
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
                                 post_id={post.post_id}
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
   <div id={styles.blogPageContainer}>
        {grid}
      {/* Pagination links */}
    { page !== 1 &&  <button onClick={() => handlePrevious(page)}>Previous</button>}

      { totalPages > page && <button onClick={() => handleNext(page)}>Next</button> }
    </div>
  );
}

// Fetch posts based on page number
export async function getStaticProps({ params }) {
  const page = parseInt(params.page, 10);
  const postsObject = await fetchPostsForPage(page);

    const posts = postsObject.posts;
    const totalPosts = postsObject.totalPosts;
    const totalPages = postsObject.totalPages;

  return { props: { page, posts, totalPosts, totalPages} };
}
export async function getStaticPaths() {
    const { totalPages } = await fetchPostsForPage(1);

    const paths = Array.from({ length: totalPages }, (_, index) => ({
        params: { page: `${index + 1 }`},
    }));

    return {
        paths,
        fallback: false
    };
}

