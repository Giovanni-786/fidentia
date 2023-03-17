import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.scss';

export default function Header(){
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeHover, setActiveHover] = useState(true);
    const handleToggle = () =>{
        setActiveMenu(!activeMenu);
    }
    const handleClose = () =>{
        setActiveMenu(false);
    }

    return (
        <header className={styles.header}>
            <Link href="/">
                <figure className={styles.logo}>
                    <Image 
                        src={`/images/fidentiaLogo.svg`} 
                        width={150}
                        height={100}
                        alt="Logomarca Fidentia para menu"
                    />
                </figure>
            </Link>
          <nav className={styles.nav}>
            <button className={styles.button_mobile} onClick={()=>handleToggle()}>
                <img src="/images/hamburguerLogo.svg" alt="ícone do tipo hamburguer para clicar" />
            </button>
            <ul className={activeMenu ? styles.active : styles.menu}>
                {activeMenu ? (
                    <div className={styles.icons_menu}>
                        <figure>
                            <img className={styles.logo_menu} src="/images/fidentiaLogoMenu.svg" alt="Logomarca Fidentia" />
                        </figure>
                        <span onClick={()=>handleClose()}>
                            <img src="/images/closeIcon.svg" alt="ícone para fechar menu" title='ícone para fechar o menu responsivo' />
                        </span>
                    </div>
                ) : null}
                <Link href="/#home">
                    <li className={activeHover && styles.hoverActive} >início</li>
                </Link>
                <Link href="/insurance">
                    <li onMouseEnter={() => setActiveHover(false) } onMouseLeave={() => setActiveHover(true) } >soluções</li>
                </Link>
                
                <Link href="/#contato">
                    <li onMouseEnter={() => setActiveHover(false)} onMouseLeave={() => setActiveHover(true) }>fale conosco</li>
                </Link>
                <Link href="/#cotacao">
                    <li onMouseEnter={() => setActiveHover(false)} onMouseLeave={() => setActiveHover(true) }>cote agora</li>
                </Link>
                <Link href="/fidentia">
                    <li onMouseEnter={() => setActiveHover(false)} onMouseLeave={() => setActiveHover(true) }>a fidentia</li>
                </Link>
                {activeMenu ? (
                    <section className={styles.social_medias_logos}>
                        <figure>
                            <img src="/images/instagramLogo.svg" alt="instagram logo" />
                        </figure>
                        <figure>
                            <img src="/images/facebookLogo.svg" alt="facebook logo" />
                        </figure>
                        <figure>
                            <img src="/images/linkedinLogo.svg" alt="linkedin logo" />
                        </figure>
                    </section>
                ) : null}
            </ul>
          </nav>
        </header>
    )
}