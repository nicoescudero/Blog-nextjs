import styles from '../styles/post.module.css';
import Image from 'next/image';
import coffee from '../public/bmc-button.png';

export default function ButtonCoffee() {
  return (
    <div>
      <p className={styles.endpost}>Fin del post</p>
      <br/>
      <div className={styles.btn_coffee}>
        <a href="https://www.buymeacoffee.com/nicoDeveloper">
          <Image src={coffee} alt="buy me a coffe widget" className={styles.btn_coffeeIMG}/>
        </a>
      </div>
    </div>
  );
};
