import React from 'react';
import MediaInfoCard from '../components/MediaInfoCard'
import useSwipe from '../components/useSwipe';
import styles from '../styles/Blog.module.scss'


const Blog = () => {


	
	const { handleTouchStart, handleTouchEnd } = useSwipe({onLeftSwipe: '/shop', onRightSwipe: 'contact/'});

	return (
		<div id='blog-container'> 
		<div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
		<h1>blog</h1>
		</div>
		</div>
	)
}


export async function getStaticProps() {
  // Fetch blog posts at build time
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3002';
  const res = await fetch(`${baseUrl}/api/blog`);
  const posts = await res.json();

  return {
    props: { posts }, // Will be passed to the page component as props
    revalidate: 10 // ISR: Regenerate the page every 10 seconds if needed
  };
}

// Use getStaticPaths to pre-render pages for each set of posts. Or handle pagination client-side, fetching new sets of posts as the user navigates between pages. 
export default Blog;
