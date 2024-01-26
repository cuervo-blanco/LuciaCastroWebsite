import React from 'react';
import styles from '../styles/MediaInfoCard.module.scss';


const MediaInfoCard = ({alt, src, title, link, description, subtitle }) => {
	return (
		<div id={styles.mediaInfoCardContainer}>
			<div id={styles.imgFrame}><img alt={alt} src={src}/></div>
		<div id={styles.textFrame}>
			<a href={link}>{title}</a>
			<p>{description}</p>
			<p>{subtitle}</p>
		</div>


		</div>
	)};


export default MediaInfoCard;

