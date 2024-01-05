import React from 'react';
import styles from '../styles/Press.module.scss';
import MediaContentLoader from './MediaContentLoader';

function Press (props) {

	return (
		<div id={styles.pressContainer}>
			<MediaContentLoader  rows="1" columns="2"/>
		</div>

	)
}

export default Press;
