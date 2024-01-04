import React, { useState }  from 'react';
import styles from '../styles/Gallery.module.scss'; 
import SubMenu from '../components/SubMenu';
import ContentLoader from '../components/ContentLoader';

const firstMenuOptions = ['ILLUSTRATIONS', 'PRODUCTS & SERVICES', 'CLIENTS', 'PRESS'];
const secondMenuOptions = ['illustrations', 'posters', '2d animation & motion graphics', 'character design'];

const Gallery = (props) => {

	const [currentOption, setCurrentOption] = useState('ILLUSTRATIONS');

	const handleOptionChange = (option) => {
		setCurrentOption(option);
	}

	console.log(currentOption);

	return(
		<div id={styles.galleryContainer}>
		<h1>gallery</h1>
		<SubMenu options={firstMenuOptions} onChangeOption={handleOptionChange} direction="horizontal" />
		<ContentLoader toLoad={currentOption} options={secondMenuOptions} />
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
