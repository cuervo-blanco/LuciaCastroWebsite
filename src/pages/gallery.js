import React, { useState }  from 'react';
import styles from '../styles/Gallery.module.scss'; 
import SubMenu from '../components/SubMenu';
import ContentLoader from '../components/ContentLoader';
import useSwipe from '../components/useSwipe';

const firstMenuOptions = ['ILLUSTRATIONS', 'PRODUCTS & SERVICES', 'CLIENTS', 'PRESS'];
const secondMenuOptions = ['illustrations', 'posters', '2d animation & motion graphics', 'character design'];

const Gallery = (props) => {

	const { handleTouchStart, handleTouchEnd } = useSwipe({onLeftSwipe: '/bio', onRightSwipe: '/'});


	const [currentOption, setCurrentOption] = useState('ILLUSTRATIONS');

	const handleOptionChange = (option) => {
		setCurrentOption(option);
	}

	console.log(currentOption);

	return(
		<div id={styles.galleryContainer}>
		<div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
		<h1>gallery</h1>
		<SubMenu options={firstMenuOptions} onChangeOption={handleOptionChange} direction="horizontal" selected={currentOption} id="GSM"/>
		<ContentLoader toLoad={currentOption} options={secondMenuOptions} />
		</div>
		</div>
	)
};

export async function getStaticProps() {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3002';
  const res = await fetch(`${baseUrl}/api/gallery`)
	console.log(res);
  const galleryImages = await res.json();
  return {
    props: { galleryImages }, // Will be passed to the page component as props
  };
}

export default Gallery;
