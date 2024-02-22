import React, { useState } from 'react';
import styles from '../styles/MediaContentLoader.module.scss';
import MediaInfoCard from './MediaInfoCard';

const MediaContentLoader = ({rows, columns, type, data}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = rows * columns;

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    }

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = data.slice(firstItemIndex, lastItemIndex);

	const grid = [];
	for (let r = 0; r < rows; r++){
	let row = [];

		for (let c = 0; c < columns; c++){
			const index = r * columns + c ;
            const card = currentItems[index];

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
            <div className={styles.paginationButtons}>
            {currentPage > 1 && (
                <button onClick={prevPage} className={styles.prevButton}>&lt;</button>
            )}
            {lastItemIndex < data.length && (
                <button onClick={nextPage} className={styles.loadMoreButton}>&gt;</button>
            )}
            </div>
		</div>
	)};


export default MediaContentLoader;

