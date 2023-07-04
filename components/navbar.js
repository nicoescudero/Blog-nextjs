import Link from 'next/link';
import Image from 'next/image';
import style from '../styles/Navbar.module.css';
import menu from '../public/hamburger.png';
import back from '../public/back.png';

import { useState } from 'react';

const Navbar = ({ navbar }) => {
  const [isOpen,setIsOpen] = useState(false)
  const [imagen,setImagen] = useState(menu)
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    if (imagen == menu) setImagen(back)
    else setImagen(menu)
  };
  return (
    <nav className={style.navbar}>
      <label className={style.logo}>NE Dev</label>
      <div className={style.menu}>
          <input type='checkbox' name='check' id='check' checked={isOpen} onChange={handleToggleMenu}/>
          <label htmlFor='check'>
              <Image src={imagen} alt='menu'/>
          </label>
      </div>
      <div className={`${style.options} ${isOpen ? style.open : ''}`}>
        <div className={style.btn_page}>
          <Link href={'/'}>Inicio</Link>
        </div>
        <div className={style.btn_page}>
          <Link href={'/projects'}>Proyectos</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;