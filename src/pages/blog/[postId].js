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
  const res = await fetch('http://localhost:3000/api/blog-post-ids');
  const postIds = await res.json();
  const paths = postIds.map(id => ({ params: { postId: id.toString() } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/blog-posts/${params.postId}`);
  const post = await res.json();

  return {
    props: { post },
  };
}

export default BlogPost;
