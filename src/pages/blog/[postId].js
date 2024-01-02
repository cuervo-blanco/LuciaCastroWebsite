import React from 'react';



class BlogPost extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="blog-post-container">
			</div>
		)
	}

}

//These getStaticPaths and getStaticProps are placed here at the moment to act as placeholders

export async function getStaticPaths() {
  // Fetch available post IDs from the server
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/blog/blog-posts-ids`);
  const postIds = await res.json();
  const paths = postIds.map(id => ({ params: { postId: id.toString() } }));

  return { paths, fallback: false }; //one can use true or 'blocking' to server-side render the page on the first request 
}

export async function getStaticProps({ params }) {
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/blog/${params.postId}`);
  const post = await res.json();

  return {
    props: { post },
  };
}

export default BlogPost;
