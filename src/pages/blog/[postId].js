import React from 'react';
import styles from '../../styles/BlogPost.module.scss';
import dynamic from 'next/dynamic';
import DOMPurify from 'isomorphic-dompurify';

const BlogPost = ({ article }) => {

    const dirtyHtml = article.published_version.body;
    const cleanHtml = DOMPurify.sanitize(dirtyHtml);

		return(
			<div id={styles.blogPostContainer}>
                <h1>{article.published_version.title}</h1>
                <img src={article.published_version.featured_image} style={{ width: '400px'}}/>
                <div id={styles.blogPostBody} dangerouslySetInnerHTML={{ __html: cleanHtml }}>
                </div>
			</div>
		)
	}



//These getStaticPaths and getStaticProps are placed here at the moment to act as placeholders

export async function getStaticPaths() {
  // Fetch available post IDs from the server
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3000';
  const res = await fetch(`http://localhost:3002/api/blog/blog-posts-ids`);
  const postIds = await res.json();

const paths = postIds.map(({ post_id }) => ({
    params: { postId: post_id.toString() },
}));

  return { paths, fallback: false }; //one can use true or 'blocking' to server-side render the page on the first request
}

export async function getStaticProps({ params }) {
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3000';
  const res = await fetch(`http://localhost:3002/get-post/${params.postId}`);
  const post = await res.json();
    console.log('Post:', post);

    const article = post[0];

  return {
    props: { article },
  };
}

export default BlogPost;
