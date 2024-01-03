import React from 'react';
import SocialMedia from './SocialMedia';
import styles from '../styles/Menu.module.scss';
import Link from 'next/link'

const Menu = () => {
	return (
		<div id={styles.menuContainer}>
			<nav id={styles.navbar}> 
				{/* Left and Upper Side*/}
				<div id={styles.leftSide}>
					<Link href="/" className={`${styles.menuLink} ${styles.logo}`}>
						<img src="" alt="Logo"/>
					</Link>	
				</div>
				{/* Right and Lower Side*/}
				<div id={styles.rightSide}>
					<Link className={styles.menuLink}href="/gallery" >
						<span >gallery</span>
					</Link>
					<Link className={styles.menuLink}href="/bio" >
						<span >bio</span>
					</Link>
					<Link className={styles.menuLink}href="/contact" >
						<span >contact</span>
					</Link>	
					<Link className={styles.menuLink}href="/blog"  >
						<span >blog</span>			
					</Link>
					<Link className={styles.menuLink}href="/shop" >
						<span >shop</span>
					</Link>
					{/* Social Media Icons */}
					<SocialMedia />
				</div>
			</nav>

		</div>
	)};


export default Menu;

