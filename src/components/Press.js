import React from 'react';
import styles from '../styles/Press.module.scss';
import MediaContentLoader from './MediaContentLoader';

function Press ({data}) {

	return (
		<div id={styles.pressContainer}>
			<MediaContentLoader  rows="1" columns="2" data={data}/>
		</div>

	)
}

export default Press;
