import { useUser } from '../context/Context.js'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Date from './Date'
import styles from '../styles/Header.module.css'

import { handleSignOut } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { connectStorageEmulator } from 'firebase/storage'

export default function Header(props) {
    const router = useRouter()
    const { user, userDB, postsIMG, setUserDayMonthYear, setUserSuccess, setUserPostsIMG } = useUser()

    function dateEvent(e) {
        const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

        console.log(e.target.value)
        const format = e.target.value.split("-")
        console.log(format)
        setUserDayMonthYear(`${parseInt(format[2])}-${months[format[1] - 1]}-${format[0]}`)
    }
    function handlerUploadFile(e, fileName) {
        const file = e.target.files[0]
        uploadIMG(file, fileName, setUserSuccess, postsIMG, setUserPostsIMG)
      }



    return (
        <header className={styles.header}>
            { user && router.pathname == "/Admin" && <>
                          <label for="bannerIntro" className={styles.label} >Seleccionar Baner de Intro</label>
                          <input type="file" id="bannerIntro" className={styles.inputFile} onChange={(e) => handlerUploadFile(e, `BannerIntro`)} accept="images" />
            </>  }
            <div className={styles.bannerIntroContainer}>
                 <img className={styles.bannerIntroIMG} src="portada.jpg" alt="Vercel Logo" />
            </div>
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





