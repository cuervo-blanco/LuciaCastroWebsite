import React from 'react';
import styles from '../styles/Button.module.scss' 

const Button = (props) => {
	return (
		<div id={styles.buttonContainer}>
		<a href={props.link}>{props.text}</a>
		</div>
	)};


export default Button;

