import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.scss';

export default function Header(){
    const [activeMenu, setActiveMenu] = useState(false);
    const handleToggle = () =>{
        setActiveMenu(!activeMenu);
    }

    return (
        <header className={styles.header}>
            <Link href="/">
                <span>
                    <img className={styles.logo} src="/images/fidentiaLogo.svg" alt="logomarca fidentia" />
                </span> 
            </Link>
          <nav className={styles.nav}>
            <button className={styles.button_mobile} onClick={()=>handleToggle()}>
                <img src="/images/hamburguer.svg" alt="hamburguer logo" />
            </button>
            <ul className={activeMenu ? styles.active : styles.menu}>
                {activeMenu ? (
                    <figure>
                        <img className={styles.logo_menu} src="/images/fidentiaLogoMenu.svg" alt="logomarca fidentia" />
                    </figure>
                ) : null}
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/">
                    <li>Soluções</li>
                </Link>
                <Link href="/">
                    <li>Artigos</li>
                </Link>
                <Link href="/">
                    <li>A fidentia</li>
                </Link>
            </ul>
          </nav>
        </header>
    )
}