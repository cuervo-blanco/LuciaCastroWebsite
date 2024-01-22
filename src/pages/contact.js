import React from 'react';
import styles from '../styles/Contact.module.scss' 
import Button from '../components/Button'
import SocialMedia from '../components/SocialMedia'
import useSwipe from '../components/useSwipe';

const Contact = () => {

	const { handleTouchStart, handleTouchEnd } = useSwipe({onLeftSwipe: '/blog', onRightSwipe: '/bio'});
	return (
		<div id={styles.contactContainer}>
		<div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
			<h1>contact</h1>
			<p>Let's collaborate!</p>
			<p>Feel free to write me if you would like us to collaborate on a project, or if your have any questions. <br/><br/>I'll be happy to read from you :) </p>
		<Button text="Send e-mail" link=""/>
		<SocialMedia id={styles.socialMediaIcons} stylesProp={null}/>
		</div>
		</div>
	)};


export default Contact;

