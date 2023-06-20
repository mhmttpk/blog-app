import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const Contact = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <div className={styles.aboutImg}>
                <Image 
                    src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg"
                    fill={true} 
                    alt='About Background'
                />
            </div>
            <div className={styles.imgText}>
                <h1 className={styles.imgTitle}>Full Stack Developer</h1>
                <h2 className={styles.imgDescription}>Handling NodeJS and ReactJS web applications</h2>
            </div>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.item}>
                <h1 className={styles.title}>Who I'am?</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tempora alias ut vero. Dignissimos natus culpa officiis 
                    quod iste praesentium adipisci.
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Labore porro, consequuntur molestias laborum officiis voluptas.
                </p>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>What I do?</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tempora alias ut vero. Dignissimos natus culpa officiis 
                    quod iste praesentium adipisci.
                </p>
                <Button url="/contact" text="Contact"/>
            </div>
        </div>
    </div>
  )
}

export default Contact