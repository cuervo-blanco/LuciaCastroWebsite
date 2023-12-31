import React from 'react';
import '../styles/Gallery.module.scss' 
import Image from '../components/Image'

class Gallery  extends Component {

	constructor(props) {
		super(props);
		state = {
		};
	}

render () {
	return(
		<div id="gallery-container">
		</div>
	)
}

};

export async function getStaticProps() {
  // Fetch blog posts at build time
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();
  return {
    props: { posts }, // Will be passed to the page component as props
    revalidate: 10 // ISR: Regenerate the page every 10 seconds if needed
  };
}

export default Gallery;
