import React from 'react';
import Image from './Image';
import styles from '../styles/ImageGallery.module.scss';

function ImageGallery ({type, rows, columns}) {
	
	const tempFetchData = {
		"1-1": {src: "", alt: "", link: ""}
	}

	const grid = [];
	for (let r = 1; r <= rows; r++){
	let row = [];

		for (let c = 1; c <= columns; c++){
			const connectionId = `${r}-${c}`;
			const imageData = tempFetchData[connectionId] || { src: "", alt: "", link:""};
			row.push(
				<Image key={connectionId} connectionId={connectionId} type={type} src={imageData.src} alt={imageData.alt} link={imageData.link}/>
			);
		}
	
		grid.push(
			<div key={`row-${r}`} className={styles.pictureRow}>{row}</div>
		);
	}



	return (
		<div id={styles.imageGalleryContainer}>
			{grid}	
		</div>
	)
}

export default ImageGallery;
