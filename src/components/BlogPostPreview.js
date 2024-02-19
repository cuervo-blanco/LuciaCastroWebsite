import React, { useEffect, useState } from 'react';
import styles from '../styles/BlogPostPreview.module.scss'



export default function BlogPostPreview (
    {isFeatured, img, post_id, title, description, slug, date, author }){

    const [published_date, setPublishedDate] = useState('');


    useEffect (() => {
        function stripDate() {
            let new_date = [];

            for (let char of date) {
                if (char === 'T'){
                    break;
                } else {
                    new_date.push(char);
                }
            };

            setPublishedDate(new_date.join(''));
        }

        stripDate();

    }, [])

    const className = isFeatured ? styles.featured : styles.regular;


    return(

             <div id={styles.blogPostPreviewContainer} className={className}>

                 <section>
                    <div id={styles.imgFrame}>
                        <a href={`/blog/${post_id}`}>
                        <img alt={`${title}'s post front image`} src={img} />
                        </a>
                    </div>
                </section>

                <section>
                    <div id={styles.textFrame}>
                        <h2><a href={`/blog/${post_id}`}>{title}</a></h2>
                        <p>{description}</p>
                    </div>
                </section>

            </div>
        );
}
