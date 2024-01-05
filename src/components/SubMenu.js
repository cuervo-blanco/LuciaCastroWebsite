import React from 'react';
import styles from '../styles/SubMenu.module.scss' 

function SubMenu(props) {
	const direction = props.direction === 'horizontal' ? [{flexDirection: 'row'}, {justifyContent: 'center'}] : [{flexDirection: 'column'}, {justifyContent: 'left', paddingLeft: '20px'}];
	const hoverClass = props.direction === 'vertical' ? styles.menuItemVerticalHover : '';


const subMenuOptions = props.options.map((option, index) => {
        const selectedStyle = props.selected === option ? { fontWeight: 'bold' } : { fontWeight: 'lighter' };
		const combinedStyle = {...direction[1], ...selectedStyle};
        return (
            <li key={`${props.id}-${index}`} className={`${styles.menuItemHover} ${hoverClass}`} style={combinedStyle} onClick={() => props.onChangeOption(option)}>
                {option}
            </li>
        );
    });

	return(
		<div id={styles.subMenuContainer}>
			<menu style={direction[0]}>
				{subMenuOptions}	
			</menu>	
		</div>
	)

};

export default SubMenu;
