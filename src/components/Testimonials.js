import React , { useState }from 'react';
import styles from '../styles/Testimonials.module.scss';



function Testimonials ({data}) {
	
const [currentTestimonial, changeTestimonial] = useState(0);


let testimonial = '';
let client = ''; 


const handleChangeTestimonial = (direction) => {

	if (!data || data.length === 0){
		testimonial = 'No testimonials to show at the moment'
		client = '';
	}
		let newTestimonialIndex = currentTestimonial + direction;
	if (newTestimonialIndex < 0){
		newTestimonialIndex = data.length - 1;
	} else if (newTestimonialIndex >= data.length){
		newTestimonialIndex = 0;
	}
	changeTestimonial(newTestimonialIndex);
}


	if (data && data.length > 0 && currentTestimonial >= 0 && currentTestimonial < data.length) {
		testimonial = data[currentTestimonial].description;
		client = data[currentTestimonial].subtitle;
	}

	return (
			<div id={styles.testimonialsContainer}>

			<button aria-label="Previous Quote" className={styles.previousButton} onClick={() => handleChangeTestimonial(- 1)}>&lt;</button>
			<div id={styles.quote}>
				<blockquote>{testimonial}</blockquote>
				<p>{client}</p>
			</div>
			<button aria-label="Next Quote" className={styles.nextButton} onClick={() => handleChangeTestimonial(+ 1)}>&gt;</button>

		</div>
	)
}

export default Testimonials;
