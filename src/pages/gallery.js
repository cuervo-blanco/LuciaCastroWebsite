import React, { useState }  from 'react';
import '../styles/Gallery.module.scss' 
import Image from '../components/Image'

const Gallery = (props) => {

	return(
		<div id="gallery-container">
		</div>
	)
};

export async function getStaticProps() {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/gallery`);
  const galleryImages = await res.json();
  return {
    props: { galleryImages }, // Will be passed to the page component as props
  };
}

export default Gallery;
