import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import menu from '../public/hamburger.png';
import back from '../public/back.png';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [imagen,setImagen] = useState(menu)
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    if (imagen == menu) setImagen(back)
    else setImagen(menu)
  };
  return (
      <nav className={styles.navbarmenu}>
        <label className={styles.logo}>NE Dev</label>
        <div className={styles.menu}>
            <input type='checkbox' name='check' id='check' checked={isOpen} onChange={handleToggleMenu}/>
            <label htmlFor='check'>
                <Image src={imagen} alt='menu'/>
            </label>
        </div>
        <div className={`${styles.options} ${isOpen ? styles.open : ''}`}>
          <div className={styles.btn_page}>
            <Link href={'/'}>Inicio</Link>
          </div>
          <div className={styles.btn_page}>
            <Link href={'/projects'}>Proyectos</Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;