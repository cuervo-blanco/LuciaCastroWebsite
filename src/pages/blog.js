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
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: { posts }, // Will be passed to the page component as props
    revalidate: 10 // ISR: Regenerate the page every 10 seconds if needed
  };
}

// Use getStaticPaths to pre-render pages for each set of posts. Or handle pagination client-side, fetching new sets of posts as the user navigates between pages. 
export default Blog;
