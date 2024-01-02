import React from 'react';
import MediaInfoCard from '../components/MediaInfoCard'


class Blog extends React.Component {
	constructor(props){
		super(props);
	}

	render (){
		return (
			<div id='blog-container'> 
			</div>
		)
	}

}

export async function getStaticProps() {
  // Fetch blog posts at build time
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/blog`);
  const posts = await res.json();

  return {
    props: { posts }, // Will be passed to the page component as props
    revalidate: 10 // ISR: Regenerate the page every 10 seconds if needed
  };
}

// Use getStaticPaths to pre-render pages for each set of posts. Or handle pagination client-side, fetching new sets of posts as the user navigates between pages. 
export default Blog;
