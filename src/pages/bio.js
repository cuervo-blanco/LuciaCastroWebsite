import React from 'react';
import '../styles/Bio.module.scss' 

const Bio = () => {
	return (
		<div id="bio-container">

		</div>
	)};

export async function getStaticProps() {
  // Fetch blog posts at build time
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/bio`);
  const bio = await res.json();

  return {
    props: { bio }, // Will be passed to the page component as props
    revalidate: 10 // ISR: Regenerate the page every 10 seconds if needed
  };
}

export default Bio;

