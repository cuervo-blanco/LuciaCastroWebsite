import React from 'react';
import SocialMedia from './SocialMedia';
import styles from '../styles/Menu.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Menu = () => {

	const router = useRouter();

	// Determine the menu style baed on the current route
	const menuStyle = router.pathname === '/' ? styles.menuLight :  styles.menuDark;

	return (
		<div id={styles.menuContainer}>
			<nav id={styles.navbar}>
				{/* Left and Upper Side*/}
				<div id={styles.leftSide}>
					<Link href="/" className={`${styles.menuLink} ${styles.logo}`}>
						<img src="" alt="logo"/>
					</Link>
				</div>
				{/* Right and Lower Side*/}
				<div id={styles.rightSide}>
					<Link className={`${styles.menuLink} ${menuStyle}`}href="/gallery" >
						<span >gallery</span>
					</Link>
					<Link className={`${styles.menuLink} ${menuStyle}`} href="/bio" >
						<span >bio</span>
					</Link>
					<Link className={`${styles.menuLink} ${menuStyle}`} href="/contact" >
						<span >contact</span>
					</Link>
					<Link className={`${styles.menuLink} ${menuStyle}`} href="/blog"  >
						<span >blog</span>
					</Link>
					<Link className={`${styles.menuLink} ${menuStyle}`} href="/shop" >
						<span >shop</span>
					</Link>
					{/* Social Media Icons */}
					<SocialMedia stylesProp={menuStyle}/>
				</div>
			</nav>

		</div>
	)};


export default Menu;

