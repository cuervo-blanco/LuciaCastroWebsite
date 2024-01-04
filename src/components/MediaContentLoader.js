import React from 'react';
import styles from '../styles/MediaContentLoader.module.scss';
import MediaInfoCard from './MediaInfoCard';

const MediaContentLoader = (props) => {

	const grid = [];
	for (let r = 0; r < props.rows; r++){
	let row = [];

		for (let c = 0; c < props.columns; c++){
			row.push(
				<MediaInfoCard key={`${r}-${c}`} type={props.type} />
			);
		}
	
		grid.push(
			<div key={r} className={styles.mediaCardRow}>{row}</div>
		);
	}





	return (
		<div id={styles.mediaContentLoaderContainer}>
			{grid}
		</div>
	)};


export default MediaContentLoader;

