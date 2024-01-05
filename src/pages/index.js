import React from 'react';
import styles from '../styles/index.module.scss';
import useSwipe from '../components/useSwipe';

const index = () => {

	const { handleTouchStart, handleTouchEnd } = useSwipe({onLeftSwipe: '/gallery', onRightSwipe: ''});


	return (
		<div id={styles.indexContainer}>
		<div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ width: '100%', height: '100%' }} >
			<div id={styles.welcomeMessage}>
				<h1>¡Hola!</h1>
				<p>I’m Lucía Castro, digital illustrator and animator <br/> from Tegucigalpa Honduras. <br/>I find joy in immersing myself in new worlds through <br/>travel, books, music and my imagination.</p>
			</div>
		</div>
		</div>
	)};


export default index;

