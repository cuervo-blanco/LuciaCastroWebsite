import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useSwipe from '../components/useSwipe';
import styles from '../styles/Blog.module.scss';
import BlogPostPreview from '../components/BlogPostPreview';


const Blog = ({ posts, totalPosts, totalPages }) => {

    const router = useRouter();

    let rows = 2;
    let columns = 4;

    const grid = [];

    for (let r = 0; r < rows; r++) {
        let row = [];

        for (let c = 0; c < columns; c++) {
            const index = r * columns + c;
            const post = posts[index];

            if (post) {
                row.push(
                    <BlogPostPreview key={`post-${c}-${r}`}
                        img={post.published_version.featured_image}
                        title={post.published_version.title}
                        description={post.published_version.description}
                        slug={post.published_version.slug}
                        date={post.published_date}
                        author={post.author} />
                );
            }
        }
        if (row.length > 0) {
            grid.push(
                <div key={`grid-${r}`} className={styles.blogPostRow}>{row}</div>
            );
        }
    }

    const handleNext = () => {
        router.push('/blog/page/2')
    }

    const { handleTouchStart, handleTouchEnd } = useSwipe({ onLeftSwipe: '/shop', onRightSwipe: 'contact/' });

    return (
        <div id={styles.blogContainer}>
            <div onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                <h1>blog</h1>
                <>
                    {grid}
                </>
                {totalPages > 1 && <button onClick={handleNext}> Next</button>}
            </div>
        </div>
    )
}


export async function getStaticProps() {
    // Fetch blog posts at build time
    const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3002';
    const res = await fetch(`${baseUrl}/api/blog/page/1`);
    const postInfo = await res.json();

    const posts = postInfo.posts;
    const totalPosts = postInfo.totalPosts;
    const totalPages = postInfo.totalPages;

    return {
        props: { posts, totalPosts, totalPages }, // Will be passed to the page component as props
        revalidate: 10 // ISR: Regenerate the page every 10 seconds if needed
    };
}

// Use getStaticPaths to pre-render pages for each set of posts. Or handle pagination client-side, fetching new sets of posts as the user navigates between pages.
export default Blog;
