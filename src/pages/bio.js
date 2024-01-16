import React, {useEffect} from 'react';
import styles from '../styles/Bio.module.scss' ;
import { bioContent } from '../data/bioData';
import Button from '../components/Button';
import useSwipe from '../components/useSwipe';



const Bio = () => {

	const { handleTouchStart, handleTouchEnd } = useSwipe({onLeftSwipe: '/contact', onRightSwipe: '/gallery'});

	console.log(bioContent);
	return (
		<div id={styles.bioContainer}>
		<div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
			<h1>bio</h1>
			<div id={styles.bioContent} dangerouslySetInnerHTML={{ __html: bioContent }}/> 
			<div id={styles.CVButton}>
				<Button text="Download CV" link=""/>
			</div>
		</div>
		</div>
	)};

export async function getStaticProps() {
  // Fetch blog posts at build time
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3002';
  const res = await fetch(`${baseUrl}/api/bio`);
  const bio = await res.json();

  return {
    props: { bio }, // Will be passed to the page component as props
    revalidate: 10 // ISR: Regenerate the page every 10 seconds if needed
  };
}

export default Bio;

