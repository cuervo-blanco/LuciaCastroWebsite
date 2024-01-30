import React from 'react';
import styles from '../styles/MediaContentLoader.module.scss';
import MediaInfoCard from './MediaInfoCard';

const MediaContentLoader = ({rows, columns, type, data}) => {

	console.log('Media Info Cards: ',data)

	const grid = [];
	for (let r = 0; r < rows; r++){
	let row = [];

		for (let c = 0; c < columns; c++){
			const index = r * columns + c ;
			const card = data[index];
		
			if (card) {
				row.push(
					<MediaInfoCard key={card.connection_id} type={type} alt={card.alt} src={card.src} link={card.link} title={card.title} description={card.description} subtitle={card.subtitle}/>
				);
			}
		}
		if (row.length > 0) {	
		grid.push(
			<div key={r} className={styles.mediaCardRow}>{row}</div>
			);
		}
	}

	return (
		<div id={styles.mediaContentLoaderContainer}>
			{grid}
		</div>
	)};


export default MediaContentLoader;

