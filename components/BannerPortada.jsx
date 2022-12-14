import { useUser } from '../context/Context.js'
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/Banner.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'


export default function Banner({ ruta, carpeta, click }) {

    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, monthAndYear } = useUser()
    const router = useRouter()
    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px'
    };

    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}></button>,
        nextArrow: <button style={{ ...buttonStyle }}></button>
    }



    function redirect(ruta) {
        window.open(ruta, '_blank')
    }
    // console.log(userDB[`${carpeta}-cabecera1`])

    return (
        <>
            {userDB[`${carpeta}-cabecera1`] && postsIMG && <div className={`${styles.containerFade} ${styles.boxShadow}`} >
                <Zoom transitionDuration={800} duration={2000} {...properties} indicators={true}>
                    {
                        Object.keys(userDB[`${carpeta}-cabecera1`]).map((i, index) =>
                            <div className="each-slide" key={index} >

                                <div>
                                    {
                                        router.pathname === "/Admin" ?
                                            <span onClick={() => click({ key: carpeta, i, topic: 'cabecera1' })}><img className={styles.sliderIMG} src={postsIMG[`${carpeta}/${i}`]} /></span>
                                            : <span onClick={() => redirect(userDB[`${carpeta}-cabecera1`][i].enlace ? userDB[`${carpeta}-cabecera1`][i].enlace : '#')}><img className={styles.sliderIMG} src={postsIMG[`${carpeta}/${i}`]} /></span>
                                    }
                                </div>
                            </div>
                        )}
                </Zoom>

            </div>}
            {userDB[`${carpeta}-cabecera2`] && postsIMG && <div className={`${styles.containerFade} ${styles.boxShadow}`} >
                <Zoom transitionDuration={800} duration={2000} {...properties} indicators={true}>
                    {
                        Object.keys(userDB[`${carpeta}-cabecera2`]).map((i, index) =>
                            <div className="each-slide" key={index} >

                                <div>
                                    {
                                        router.pathname === "/Admin" ?
                                            <span onClick={() => click({ key: carpeta, i, topic: 'cabecera2' })}><img className={styles.sliderIMG} src={postsIMG[`${carpeta}/${i}`]} /></span>
                                            : <span onClick={() => redirect(userDB[`${carpeta}-cabecera2`][i].enlace ? userDB[`${carpeta}-cabecera2`][i].enlace : '#')}><img className={styles.sliderIMG} src={postsIMG[`${carpeta}/${i}`]} /></span>
                                    }
                                </div>
                            </div>
                        )}
                </Zoom>

            </div>}
            {userDB[`${carpeta}-cabecera3`] && postsIMG && <div className={`${styles.containerFade} ${styles.boxShadow}`} >
                <Zoom transitionDuration={800} duration={2000} {...properties} indicators={true}>
                    {
                        Object.keys(userDB[`${carpeta}-cabecera3`]).map((i, index) =>
                            <div className="each-slide" key={index} >

                                <div>
                                    {
                                        router.pathname === "/Admin" ?
                                            <span onClick={() => click({ key: carpeta, i, topic: 'cabecera3' })}><img className={styles.sliderIMG} src={postsIMG[`${carpeta}/${i}`]} /></span>
                                            : <span onClick={() => redirect(userDB[`${carpeta}-cabecera3`][i].enlace ? userDB[`${carpeta}-cabecera3`][i].enlace : '#')}><img className={styles.sliderIMG} src={postsIMG[`${carpeta}/${i}`]} /></span>
                                    }
                                </div>
                            </div>
                        )}
                </Zoom>

            </div>}

        </>
    )
}


{/* <Link href={`https://api.whatsapp.com/send?phone=${userDB[`${carpeta}-derecha1`][i].whatsapp}&text=Hola%20vi%20su%20anuncion%20en%20el%20PERIODICO%20HOY%20`} legacyBehavior>
                                    <a target="_blank"><img className={styles.sliderWhatsapp} src={`/SocialMedia/whatsapp.svg`} /></a>
                                </Link> */}



{/* {
                                    router.pathname == "/Admin" ?
                                        <span><img className={styles.sliderIMG} src={postsIMG[`${carpeta}/${i}`]} style={{ objectPosition: `${userDB[carpeta][i].objectFit}` }} /></span>
                                        : <Link href={userDB['BannerTop'][i].enlace ? userDB['BannerTop'][i].enlace : '#'} legacyBehavior>
                                            <a target={userDB['BannerTop'][i].enlace ? "_blank" : ''}><img className={styles.sliderIMG} style={{ objectPosition: `${userDB[carpeta][i].objectFit}` }} src={postsIMG[`${carpeta}/${i}`]} /></a>
                                        </Link>
                                } */}