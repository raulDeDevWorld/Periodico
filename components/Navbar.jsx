import Link from 'next/link'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context.js'

import style from '../styles/Navbar.module.css'

export default function Navbar() {
    const { pathname } = useRouter()
    const { setUserShowImg, showImg } = useUser()
    function handleClick() {
        setUserShowImg(!showImg)
    }
    function handlerClick() {
        setUserShowImg(false)
    }
    return (
        <div className={style.container}>
            <nav className={style.nav}>
                <Link href="#Sociedad" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#Sociedad" ? style.active : ''}`} onClick={handlerClick}>SOCIEDAD</a>
                </Link>
                <Link href="#Seguridad" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#Seguridad" ? style.active : ''}`} onClick={handlerClick}>SEGURIDAD</a>
                </Link>
                <Link href="#GestionDeGobierno" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#GestionDeGobierno" ? style.active : ''}`} onClick={handlerClick}>GESTIÓN DE GOBIERNO</a>
                </Link>
                <Link href="#Politica" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#Politica" ? style.active : ''}`} onClick={handlerClick}>POLÍTICA</a>
                </Link>
                <Link href="#Salud" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#Salud" ? style.active : ''}`} onClick={handlerClick}>SALUD</a>
                </Link>
                <Link href="#Economia" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#Economia" ? style.active : ''}`} onClick={handlerClick}>ECONOMIA</a>
                </Link>
                <Link href="#Deportes" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#Deportes" ? style.active : ''}`} onClick={handlerClick}>DEPORTES</a>
                </Link>
                <Link href="#Culturas" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#Culturas" ? style.active : ''}`} onClick={handlerClick}>CULTURA</a>
                </Link>
                <Link href="#Empresarial" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#Empresarial" ? style.active : ''}`} onClick={handlerClick}>EMPRESARIAL</a>
                </Link>
                <Link href="#Internacional" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#Internacional" ? style.active : ''}`} onClick={handlerClick}>INTERNACIONAL</a>
                </Link>
                <Link href="#opinion" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#opinion" ? style.active : ''}`} onClick={handlerClick}>OPINIÓN</a>
                </Link>
                <Link href="#Imagenes" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#imagenes" ? style.active : ''}`} onClick={handleClick}>IMAGENES</a>
                </Link>
                <Link href="#Imagenes" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#imagenes" ? style.active : ''}`} onClick={handleClick}>VIDEOS</a>
                </Link>
                
                
                <Link href="#nosotros" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#nosotros" ? style.active : ''}`} onClick={handlerClick}>NOSOTROS</a>
                </Link>
            </nav>
        </div>
    )
}