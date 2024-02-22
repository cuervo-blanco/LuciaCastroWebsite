import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../styles/blogPage.module.scss';
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
                                 author={post.author}
                                 page={page}/>
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
        <div id={styles.postPreviewContainer}>
            {grid}
        </div>
      {/* Pagination links */}
    { page !== 1 &&  <button className={styles.prevButton} onClick={() => handlePrevious(page)}>&lt;</button>}
    { totalPages > page && <button className={styles.loadMoreButton} onClick={() => handleNext(page)}>&gt;</button> }
    </div>
  );
}

// Fetch posts based on page number
export async function getStaticProps({ params }) {
    try {
        const page = parseInt(params.page, 10);
        const res = await fetch(`http://localhost:3002/api/blog/page/${page}`);
        if(!res.ok){
            console.error(`Failer to fetch posts, status: ${res.status}`)
            throw new Error(`Failed to fetch posts, status: ${res.status}`);
        }

        const data = await res.json();
        console.log('Data received for the individual pages: ', data);

        if(!data.posts){
            console.error('No posts found');
            return { props: {  props: [], page, totalPosts: 0, totalPages: 0}};
        }

      return { props: { ...data, page} };
} catch (error) {
        console.error('Error fetching posts:', error);
        return { props: { posts: [], page: 1, totalPosts: 0, totalPages: 0}};
    }
}

export async function getStaticPaths() {
    const baseUrl = 'http://localhost:3002'
    const res = await fetch(`${baseUrl}/api/blog/`);
    const data = await res.json();

    const { totalPages } = data;

    const paths = Array.from({ length: totalPages }, (_, index) => ({
        params: { page: `${index + 1 }`},
    }));

    return {
        paths,
        fallback: false
    };
}

