import React from 'react';
import Image from './Image';
import styles from '../styles/ImageGallery.module.scss';

function ImageGallery (props) {

	const imageHover = {}

	const grid = [];
	for (let r = 0; r < props.rows; r++){
	let row = [];

		for (let c = 0; c < props.columns; c++){
			row.push(
				<Image key={`${r}-${c}`} type={props.type} />
			);
		}
	
		grid.push(
			<div key={r} className={styles.pictureRow}>{row}</div>
		);
	}



	return (
		<div id={styles.imageGalleryContainer} >
			{grid}	
		</div>
	)
}

export default ImageGallery;
