import React from 'react';
import Image from './Image';
import styles from '../styles/ImageGallery.module.scss';

function ImageGallery ({type, rows, columns, illustrations}) {

	console.log('Illustrations inside image gallery: ', illustrations);

	const grid = [];
	for (let r = 1; r <= rows; r++){
	let row = [];

		for (let c = 1; c <= columns; c++){
			const index = (r - 1) * columns + (c - 1);
			const illustration = illustrations[index];
			row.push(	
				<Image key={`${r}-${c}`} type={type} src={illustration.src} alt={illustration.alt} link={illustration.link}/>
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
