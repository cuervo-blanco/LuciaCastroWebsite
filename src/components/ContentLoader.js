import React, { useState } from 'react';
import styles from '../styles/ContentLoader.module.scss';
import SubMenu from './SubMenu';
import ImageGallery from './ImageGallery';
import Testimonials from './Testimonials';
import Press from './Press';

const ContentLoader = (props) => {
		// This sets the state for the option selected in the Second Submenu, the one inside this Component
		const [currentOption, setCurrentOption] = useState('illustrations');

		const handleOptionChange = (option) => {
		setCurrentOption(option);
	}

	return (
		<div id={styles.contentLoaderContainer}>

		{props.toLoad === 'ILLUSTRATIONS' && <ImageGallery/>}
		{props.toLoad === 'PRODUCTS & SERVICES' && <SubMenu options={props.options} onChangeOption={handleOptionChange} direction="vertical"/>
		}
		{props.toLoad === 'CLIENTS' && <Testimonials />}
		{props.toLoad === 'PRESS' && <Press />}
		</div>
	)};


export default ContentLoader;

