import React from 'react';
import styles from '../styles/SubMenu.module.scss' 

function SubMenu(props) {
	const direction = props.direction === 'horizontal' ? [{flexDirection: 'row'}, {justifyContent: 'center'}] : [{flexDirection: 'column'}, {justifyContent: 'left'}];


const subMenuOptions = props.options.map((option, index) => (
	<li key={index} style={direction[1]} onClick={() => props.onChangeOption(option)}>{option}</li>
));
	return(
		<div id={styles.subMenuContainer}>
			<menu style={direction[0]}>
				{subMenuOptions}	
			</menu>	
		</div>
	)

};

export default SubMenu;
