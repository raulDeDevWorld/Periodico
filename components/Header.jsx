import { useUser } from '../context/Context.js'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Link from 'next/link'

import Date from './Date'
import styles from '../styles/Header.module.css'
import { useState } from 'react'
import Button from '../components/Button'

import { getDate } from '../utils/Utils'
import { uploadIMG } from '../firebase/storage'
import { writeUserData } from '../firebase/utils'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';


import { connectStorageEmulator } from 'firebase/storage'

export default function Header(props) {
    const router = useRouter()
    const { user, userDB, postsIMG, setUserMonthAndYear, setUserDayMonthYear, setUserSuccess, setUserPostsIMG, date } = useUser()

    const [data, setData] = useState({})

    const [newBannerIntro, setNewBannerIntro] = useState(null)
    const [urlBannerIntro, setUrlBannerIntro] = useState(null)

    function handlerEventChange(e) {
        const name = e.target.name
        const value = e.target.value
        const object = { [name]: value }
        setData({ ...data, ...object })
    }
    //console.log(postsIMG)
    // data.dateInit && data.dateFinish ?console.log( data.dateInit < data.dateFinish) :''
    //console.log(Object.keys(userDB.Publicidades.HeaderBanners))
    function dateEvent(e) {
        const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        const format = e.target.value.split("-")
        setUserDayMonthYear(`${parseInt(format[2])}-${months[format[1] - 1]}-${format[0]}`)
        setUserMonthAndYear(`${months[format[1] - 1]}-${format[0]}`)
    }

    function handlerUploadFile(e) {
        const file = e.target.files[0]
        setNewBannerIntro(file)
        setUrlBannerIntro(URL.createObjectURL(file))
    }

    function save(e) {
        const file = newBannerIntro
        const fileName = getDate()
        const ruteDB = '/Publicidades/HeaderBanners/'
        const object = {
            [fileName]: {
                dateInit: data.dateInit,
                dateFinish: data.dateFinish,
                enlace: data.enlace,
                whatsapp: data.whatsapp
            }
        }
        console.log(object)
        writeUserData(ruteDB, object, setUserSuccess)
        uploadIMG(ruteDB, fileName, file, setUserSuccess, 'Publicidades/HeaderBanners')
    }

    function handlerClick(url) {
        router.push(url)
    }

    return (
        <header className={styles.header}>
            {user && router.pathname == "/Admin" &&
                <div className={styles.bannerIntroContainer}>
                    <div className={styles.selectBannerIntroConatainer}>
                        <label for="bannerIntro" className={styles.label} >Añadir</label>
                        <input type="file" id="bannerIntro" className={styles.inputFile} onChange={(e) => handlerUploadFile(e)} accept="images" />
                        <input type="text" className={styles.input} placeholder='Enlace' name="enlace" onChange={handlerEventChange} />
                        <input type="text" className={styles.input} placeholder='Whatsapp' name="whatsapp" onChange={handlerEventChange} />
                        <input className={styles.calendario} type="date" id="start" name="dateInit" onChange={handlerEventChange} />
                        <input className={styles.calendario} type="date" id="start" name="dateFinish" onChange={handlerEventChange} />
                    </div>
                    <img className={styles.previewIMG} src={urlBannerIntro} alt="" />
                    <Button style="buttonMiniSecondary" click={save}>Guardar</Button>
                </div>
            }




            <div className={styles.containerFade} >
                {userDB.Publicidades && postsIMG && <Fade transitionDuration={800} duration={2000}>
                    {
                        Object.keys(userDB.Publicidades.HeaderBanners).map((i, index) =>
                            <div className="each-slide" key={index}>
                                <div>
                                    <Link href={userDB.Publicidades.HeaderBanners[i].enlace} legacyBehavior>
                                        <a target="_blank"><img className={styles.sliderIMG} src={postsIMG[`Publicidades/HeaderBanners/${i}`]}  /></a>
                                    </Link>
                                    <Link href={`https://api.whatsapp.com/send?phone=${userDB.Publicidades.HeaderBanners[i].whatsapp}&text=Hola%20vi%20su%20anuncion%20en%20el%20PERIODICO%20HOY%20`} legacyBehavior>
                                        <a target="_blank"><img className={styles.sliderWhatsapp} src={`/SocialMedia/whatsapp.svg`} /></a>
                                    </Link>
                                    
                                </div>
                            </div>
                        )}
                </Fade>
                }
            </div>








            {/* <div className="each-slide-effect">
                {console.log(postsIMG[`Publicidades/HeaderBanners/${i}`])}
                <div style={{ 'backgroundImage': `url(${postsIMG[`Publicidades/HeaderBanners/${i}`]})` }}>
                    <span>Slide 2</span>
                </div>
                </div>*/}
















            <div className={styles.fecha}>
                <Date></Date>
                <input className={styles.calendario} type="date" id="start" name="trip" onChange={dateEvent} />
            </div>
            <div className={styles.portada}>
                <div className={styles.socialMedia}>
                    <span>Siguenos en:</span>
                    <div className={styles.socialMediaIcons}>
                        <img src="/SocialMedia/internet.png" alt="SocialMedia" />
                        <img src="/SocialMedia/facebook.png" alt="SocialMedia" />
                        <img src="/SocialMedia/instagram.png" alt="SocialMedia" />
                        <img src="/SocialMedia/twiter.png" alt="SocialMedia" />
                        <img src="/SocialMedia/youtube.png" alt="SocialMedia" />
                        <img src="/SocialMedia/tiktok.png" alt="SocialMedia" />
                    </div>
                </div>
                <video
                    muted
                    autoPlay={"autoplay"}
                    preload="auto"
                    loop
                    className={styles.video}>
                    <source src="/video.webm" type="video/webm" />
                </video></div>
            <Navbar />
        </header>
    )
}





