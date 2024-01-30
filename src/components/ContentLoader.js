import React, { useState, useEffect } from 'react';
import styles from '../styles/ContentLoader.module.scss';
import SubMenu from './SubMenu';
import ImageGallery from './ImageGallery';
import Testimonials from './Testimonials';
import Press from './Press';
import MediaContentLoader from './MediaContentLoader';

const ContentLoader = ({ options, toLoad, illustrations, mic1, mic2, mic3, clients }) => {
		// This sets the state for the option selected in the Second Submenu, the one inside this Component
		const [currentOption, setCurrentOption] = useState('illustrations');
		const [visibleContent, setVisibleContent] = useState(toLoad);

		 useEffect(() => {
			 setVisibleContent(toLoad);
		  }, [toLoad]);

		const handleOptionChange = (option) => {
		setCurrentOption(option);
	}

	return (
		<div id={styles.contentLoaderContainer}>
		 	{toLoad === 'ILLUSTRATIONS' &&(<ImageGallery type="square" rows="3" columns="5" illustrations={illustrations}/>)}
			{toLoad === 'PRODUCTS & SERVICES' &&
			<>
                    <SubMenu options={options} onChangeOption={handleOptionChange} direction="vertical" selected={currentOption} id="CSM" />
                    {currentOption === 'illustrations' && <MediaContentLoader rows="1" columns="3" data={mic1}/>}
                    {currentOption === 'posters' && <ImageGallery type="poster" rows="2" columns="5"/>}
                    {currentOption === '2d animation & motion graphics' && <MediaContentLoader rows="2" columns="3" data={mic2}/>}
					{currentOption === 'character design' && <MediaContentLoader rows="2" columns="2" data={mic3} />}
			 </>
			}
			{toLoad === 'CLIENTS' && <Testimonials data={clients}/>}
			{toLoad === 'PRESS' && <Press />}
		</div>
	)};


export default ContentLoader;

