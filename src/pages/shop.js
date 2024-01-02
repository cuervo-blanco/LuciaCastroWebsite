import React from 'react';


class Shop extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="shop-container">
			</div>
		)
	}
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
