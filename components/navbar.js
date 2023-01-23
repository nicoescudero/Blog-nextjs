import Link from 'next/link';
import style from '../styles/Navbar.module.css';

const Navbar = ({ navbar }) => {
  return (
    <nav className={navbar}>
      <label className={style.logo}>NE Dev</label>
      <div className={style.options}>
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