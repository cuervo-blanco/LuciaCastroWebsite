import React from 'react';
import styles from '../styles/Image.module.scss';

const Image = ({type, src, alt, link}) => {

	 function sendToPage(site) {
		window.location.href = site;
	}


	let size = {};
	
	switch (type) {
	case 'square':
		size = {width: '176px', height: '176px'};
		break;
	case 'poster':
		size = {width: '176px', height: '256px'};
		break;
	default:
		size =  {width: '176px', height: '176px'};
	}
	
	return (
		<div id={styles.imageContainer} style={size} onClick={() => sendToPage(link)}>
			<img alt={alt} src={src}/>
		</div>
	)};


export default Image;

