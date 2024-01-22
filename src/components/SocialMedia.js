import React from 'react';
import styles from '../styles/SocialMedia.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';

	export function sendToPage(site) {
		window.location.href = site;
 }


const SocialMedia = (props) => {

	return (
		<div id={styles.socialMediaContainer}>
			<FontAwesomeIcon icon={ faInstagram } className={`${styles.brandIcon} ${props.stylesProp}`} onClick={() => sendToPage('https://www.instagram.com/lucia.ic/')}/>
			<FontAwesomeIcon icon={ faLinkedin } className={`${styles.brandIcon} ${props.stylesProp}`} onClick={() => sendToPage('https://www.linkedin.com/in/lucia-castro-/')}/>
			<FontAwesomeIcon icon={ faBehance } className={`${styles.brandIcon} ${props.stylesProp}`} onClick={() => sendToPage('https://www.behance.net/LuciaCastro')}/>
		</div>
	)};


export default SocialMedia;

