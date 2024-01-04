import React from 'react';
import styles from '../styles/Image.module.scss' 

const Image = (props) => {

	let size = {};
	
	switch (props.type) {
	case 'square':
		size = {width: '176px', height: '176px'};
		break;
	case 'poster':
		size = {width: '176px', height: '256px'};
		break;
	default:
		size =  {width: '176px', height: '176px'};
	}
	
	return (
		<div id={styles.imageContainer} style={size}>
			<img alt="" src=""/>
		</div>
	)};


export default Image;

