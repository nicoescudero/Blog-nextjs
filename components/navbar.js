import Link from 'next/link';
import style from '../styles/Navbar.module.css';
import Head from "next/head";

const Navbar = () => {
  return (
    <Head>
      <title>NE Dev</title>
      <nav className={style.navbar}>
      <label className={style.logo}>NE Dev</label>
      <div className={style.options}>
        <div className={style.btn_page}>
          <Link href={"/"}>Inicio</Link>
        </div>
        <div className={style.btn_page}>
          <Link href={"/projects"}>Proyectos</Link>
        </div>
      </div>
      </nav>
    </Head>
  );
};

export default Navbar;