import React from 'react';
import styles from './footer.module.css';
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>&#169; All rights reserved.</div>
        <div className={styles.social}>
            <Image src="/facebook.png" width={15} height={15} className={styles.icon} alt="Facebook"/>
            <Image src="/instagram.png" width={15} height={15} className={styles.icon} alt="Instagram"/>
            <Image src="/twitter.png" width={15} height={15} className={styles.icon} alt="Twitter"/>
            <Image src="/youtube.png" width={15} height={15} className={styles.icon} alt="Youtube"/>
        </div>
    </div>
  )
}

export default Footer;