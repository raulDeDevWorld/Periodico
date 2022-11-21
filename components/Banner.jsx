import { useUser } from '../context/Context.js'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/Banner.module.css'

import Link from 'next/link'


export default function Banner({ ruta, carpeta }) {

    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, monthAndYear } = useUser()
    console.log(carpeta)

    return (
        <div className={styles.containerFade} >
            {userDB[ruta] && postsIMG && <Fade transitionDuration={800} duration={2000}>
                {
                    Object.keys(userDB[ruta][carpeta]).map((i, index) =>
                        <div className="each-slide" key={index}>
                            <div>
                                <Link href={i} legacyBehavior>
                                    <a target="_blank"><img className={styles.sliderIMG} src={postsIMG[`${ruta}/${i}`]} /></a>
                                </Link>
                                {/*<Link href={`https://api.whatsapp.com/send?phone=${userDB.Publicidades.HeaderBanners[i].whatsapp}&text=Hola%20vi%20su%20anuncion%20en%20el%20PERIODICO%20HOY%20`} legacyBehavior>
                                        <a target="_blank"><img className={styles.sliderWhatsapp} src={`/SocialMedia/whatsapp.svg`} /></a>
                                </Link>*/}

                            </div>
                        </div>
                    )}
            </Fade>
            }
        </div>)
}