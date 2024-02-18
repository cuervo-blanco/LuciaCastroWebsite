import React, { useEffect, useState } from 'react';
import styles from '../styles/BlogPostPreview.module.scss'



export default function BlogPostPreview (
    { img, post_id, title, description, slug, date, author }){

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


    return(

             <div id={styles.blogPostPreviewContainer}>

                 <section>
                    <div id={styles.imgFrame}>
                        <a href={`/blog/${post_id}`}>
                        <img alt={`${title}'s post front image`} src={img} />
                        </a>
                    </div>
                </section>

                <section>
                    <div id={styles.textFrame}>
                        <a href={`/blog/${post_id}`}>{title}</a>
                        <p>{description}</p>
                        <p>{published_date}</p>
                        <p>{author}</p>
                    </div>
                </section>

            </div>
        );
}
