import { useUser } from '../context/Context.js'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/Banner.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'


export default function Banner({ ruta, carpeta, click }) {

    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, monthAndYear } = useUser()
    // console.log(userDB[ruta])
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

console.log(userDB[`${carpeta}-derecho1`])
    return (
        <>
         <div className={styles.containerFadeRight} >
            {userDB[`${carpeta}-derecho1`] && postsIMG && <Fade transitionDuration={800} duration={2000} scale={1.4} {...properties} indicators={true}>
                {
                    Object.keys(userDB[`${carpeta}-derecho1`]).map((i, index) =>
                        <div className="each-slide" key={index} >
                            
                            <div>
                                {
                                    router.pathname == "/Admin" ?
                                        <span onClick={() => click({ key: carpeta , i, topic: 'derecho1' })}><img className={styles.sliderIMGLeft} src={postsIMG[`${carpeta}/${i}`]} /> 
                                        </span>
                                        : <span onClick={() => click({ href: userDB[userDB[`${carpeta}-derecho1`]][i].enlace ? userDB[userDB[`${carpeta}-derecho1`]][i].enlace : '#', target: userDB[userDB[`${carpeta}-derecho1`]][i].enlace ? "_blank" : '' })}>
                                        <img className={styles.sliderIMGLeft} src={postsIMG[`${carpeta}/${i}`]} />
                                    </span>
                                }
                    

                            </div>
                        </div>
                    )}
            </Fade>
            }
        </div>
        <div className={styles.containerFadeRight} >
            {userDB[`${carpeta}-derecho2`] && postsIMG && <Fade transitionDuration={800} duration={2000} scale={1.4} {...properties} indicators={true}>
                {
                    Object.keys(userDB[`${carpeta}-derecho2`]).map((i, index) =>
                        <div className="each-slide" key={index} >
                            
                            <div>
                                {
                                    router.pathname == "/Admin" ?
                                        <span onClick={() => click({ key: carpeta , i, topic: 'derecho2' })}><img className={styles.sliderIMGLeft} src={postsIMG[`${carpeta}/${i}`]} /> 
                                        </span>
                                        : <span onClick={() => click({ href: userDB[userDB[`${carpeta}-derecho2`]][i].enlace ? userDB[userDB[`${carpeta}-derecho2`]][i].enlace : '#', target: userDB[userDB[`${carpeta}-derecho2`]][i].enlace ? "_blank" : '' })}>
                                        <img className={styles.sliderIMGLeft} src={postsIMG[`${carpeta}/${i}`]} />
                                    </span>
                                }

                            </div>
                        </div>
                    )}
            </Fade>
            }
        </div>
      
        <div className={styles.containerFadeRight} >
            {userDB[`${carpeta}-derecho3`] && postsIMG && <Fade transitionDuration={800} duration={2000} scale={1.4} {...properties} indicators={true}>
                {
                    Object.keys(userDB[`${carpeta}-derecho3`]).map((i, index) =>
                        <div className="each-slide" key={index} >
                            
                            <div>
                                {
                                    router.pathname == "/Admin" ?
                                        <span onClick={() => click({ key: carpeta, i, topic: 'derecho3' })}><img className={styles.sliderIMGLeft} src={postsIMG[`${carpeta}/${i}`]} /> 
                                        </span>
                                        : <span onClick={() => click({ href: userDB[userDB[`${carpeta}-derecho3`]][i].enlace ? userDB[userDB[`${carpeta}-derecho3`]][i].enlace : '#', target: userDB[userDB[`${carpeta}-derecho3`]][i].enlace ? "_blank" : '' })}>
                                        <img className={styles.sliderIMGLeft} src={postsIMG[`${carpeta}/${i}`]} />
                                    </span>
                                }

                            </div>
                        </div>
                    )}
            </Fade>
            }
        </div>
        
        
        
        </>
        )
}



{ /*  <Link href={`https://api.whatsapp.com/send?phone=${userDB[carpeta][i].whatsapp}&text=Hola%20vi%20su%20anuncion%20en%20el%20PERIODICO%20HOY%20`} legacyBehavior>
<a target="_blank"><img className={styles.sliderWhatsapp} src={`/SocialMedia/whatsapp.svg`} /></a>
</Link> */}