import React from 'react';
import SocialMedia from './SocialMedia';
import '../styles/Menu.module.scss';
import Link from 'next/link'

const Menu = () => {
	return (
		<div id="menu-container">
			<nav>
			<Link href="/">
				<img src="" alt="Logo"/>
			</Link>	
			<Link href="/gallery">
				gallery
			</Link>
			<Link href="/bio">
				bio
			</Link>
			<Link href="/contact">
				contact
			</Link>	
			<Link href="/blog">
				blog			
			</Link>
			<Link href="/shop">
				shop
			</Link>
			<SocialMedia />
			</nav>

		</div>
	)};


export default Menu;

