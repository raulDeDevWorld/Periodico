import { useUser } from '../context/Context.js'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/Banner.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'


export default function Banner({ ruta, carpeta, click }) {

    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, monthAndYear } = useUser()
    console.log(userDB[ruta])
    const router = useRouter()

    return (
        <div className={styles.containerFadeRight} >
            {userDB[carpeta] && postsIMG && <Fade transitionDuration={800} duration={2000}>
                {
                    Object.keys(userDB[carpeta]).map((i, index) =>
                        <div className="each-slide" key={index} onClick={() => click({ i, key: carpeta })}>
                            
                            <div>
                                {
                                    router.pathname == "/Admin" ?
                                        <span><img className={styles.sliderIMGLeft} src={postsIMG[`${carpeta}/${i}`]} style={{ objectPosition: `${userDB[carpeta][i].objectFit}` }} />                                                <span className={styles.capa}></span>
                                        </span>
                                        : <Link href={i} legacyBehavior>
                                            <a target="_blank">
                                                <span>

                                                <img className={styles.sliderIMGLeft} style={{ objectPosition: `${userDB[carpeta][i].objectFit}` }} src={postsIMG[`${carpeta}/${i}`]} />
                                                </span>
                                                </a>
                                        </Link>
                                }
                             { /*  <Link href={`https://api.whatsapp.com/send?phone=${userDB[carpeta][i].whatsapp}&text=Hola%20vi%20su%20anuncion%20en%20el%20PERIODICO%20HOY%20`} legacyBehavior>
                                    <a target="_blank"><img className={styles.sliderWhatsapp} src={`/SocialMedia/whatsapp.svg`} /></a>
                            </Link> */}

                            </div>
                        </div>
                    )}
            </Fade>
            }
        </div>)
}