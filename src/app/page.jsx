import styles from './page.module.css';
import Image from 'next/image';
import Hero from 'public/hero.png';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Blog App for my fullstack building program.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorum obcaecati voluptatum magnam facilis eum eius porro 
          veniam consectetur harum numquam, consequuntur et corporis inventore autem.
        </p>
        <Button url="/portfolio" text="See Our Blogs"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} priority={true} alt="" className={styles.img}/>
      </div>
    </div>
  )
}
