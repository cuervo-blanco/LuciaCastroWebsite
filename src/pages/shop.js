import React from 'react';
import useSwipe from '../components/useSwipe';


const Shop = () => {
	

	const { handleTouchStart, handleTouchEnd } = useSwipe({onLeftSwipe: '/', onRightSwipe: '/blog'});

		return(
			<div id="shop-container">
			<div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
			<h1>shop</h1>
			</div>
			</div>
		)
}

export async function getStaticProps() {
  // Fetch blog posts at build time
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://lucia-castro.com' : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/shop`);
  const items = await res.json();

  return {
    props: { items }, // Will be passed to the page component as props
    revalidate: 10 // ISR: Regenerate the page every 10 seconds if needed
  };
}

export default Shop;
