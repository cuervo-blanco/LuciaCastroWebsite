import React , { useState }from 'react';
import styles from '../styles/Testimonials.module.scss';
import testimonialsArray from '../data/testimonialsArray';




function Testimonials (props) {
	
const [currentTestimonial, changeTestimonial] = useState(0);


const handleChangeTestimonial = (direction) => {
		let newTestimonialIndex = currentTestimonial + direction;
	if (newTestimonialIndex < 0){
		newTestimonialIndex = testimonialsArray.length - 1;
	} else if (newTestimonialIndex >= testimonialsArray.length){
		newTestimonialIndex = 0;
	}
	changeTestimonial(newTestimonialIndex);
}


	const testimonial = testimonialsArray[currentTestimonial][0];
	const client = testimonialsArray[currentTestimonial][1];


	return (
			<div id={styles.testimonialsContainer}>

			<button onClick={() => handleChangeTestimonial(- 1)}>&lt;</button>
			<div id={styles.quote}>
				<blockquote>{testimonial}</blockquote>
				<p>{client}</p>
			</div>
			<button onClick={() => handleChangeTestimonial(+ 1)}>&gt;</button>

		</div>
	)
}

export default Testimonials;
