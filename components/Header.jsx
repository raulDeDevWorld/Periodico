import { useUser } from '../context/Context.js'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Link from 'next/link'
import Modal from './Modal'

import Date from './Date'
import styles from '../styles/Header.module.css'
import { useState } from 'react'
import Button from '../components/Button'
import BannerPortada from '../components/BannerPortada'
import BannerLeft from '../components/BannerLeft'
import RelojDigital from './RelojDigital'

import FormAdds from '../components/FormAdds'

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

    const [elements, setElements] = useState(false)
    const [dataForDate, setDataForDate] = useState([])
    const [dataEditor, setDataEditor] = useState(null)

    function setPostsElements() {
        setElements(!elements)
    }

    function handlerEventChange(e) {
        const name = e.target.name
        const value = e.target.value
        const object = { [name]: value }
        setData({ ...data, ...object })
    }

    function dateEvent(e) {
        const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        const format = e.target.value.split("-")
        setUserDayMonthYear(`${parseInt(format[2])}-${months[format[1] - 1]}-${format[0]}`)
        setUserMonthAndYear(`${months[format[1] - 1]}-${format[0]}`)
    }

    function handlerClick(url) {
        router.push(url)
    }
    function handlerClickEnlace(i) {
        router.pathname != "/Admin" && router.push("/" + userDB[topic]["Posts"][`PostImage_${i}`])
        router.pathname == "/Admin" && setDataEditor(i)

        console.log(i)
    }

    return (
        <>

            <header className={styles.header}>

                {router.pathname === "/Admin" && <FormAdds></FormAdds>}



                <div className={styles.containerFade} >
                    {userDB["BannerTop"] && <BannerPortada ruta={'/BannerTop'} carpeta="BannerTop" click={handlerClickEnlace}></BannerPortada>}            </div>




                <div className={styles.fecha}>
                    <Date></Date>
                    <input className={styles.calendario} type="date" id="start" name="trip" onChange={dateEvent} />
                </div>
                <div className={styles.portada}>

                <RelojDigital></RelojDigital>



                    
                    <div className={styles.socialMedia}>

                        <div className={styles.containerSocialMediaIcons}>
                            <span>Siguenos en:</span>
                            <div className={styles.socialMediaIcons}>
                                <Link href="https://www.facebook.com/periodicohoybolivia0" legacyBehavior scroll={false}>
                                    <a onClick={handlerClick} target="_blank"><img src="/SocialMedia/facebook.png" alt="SocialMedia" /></a>
                                </Link>
                                <Link href="https://www.instagram.com/periodicohoybolivia/" legacyBehavior scroll={false}>
                                    <a onClick={handlerClick} target="_blank"><img src="/SocialMedia/instagram.png" alt="SocialMedia" /></a>
                                </Link>
                                <Link href="https://twitter.com/_HOYBolivia" legacyBehavior scroll={false}>
                                    <a onClick={handlerClick} target="_blank"> <img src="/SocialMedia/twiter.png" alt="SocialMedia" /></a>
                                </Link>
                                <Link href="https://www.youtube.com/channel/UCXFA6pzESb1NQMsepmhC6Vw" legacyBehavior scroll={false}>
                                    <a onClick={handlerClick} target="_blank"> <img src="/SocialMedia/youtube.png" alt="SocialMedia" /></a>
                                </Link>
                                <Link href="https://www.tiktok.com/@periodicohoybolivia" legacyBehavior scroll={false}>
                                    <a onClick={handlerClick} target="_blank"> <img src="/SocialMedia/tiktok.png" alt="SocialMedia" /></a>
                                </Link>
                            </div>
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
            {dataEditor && <Modal post={dataEditor.key} topic={'/'} i={dataEditor.i} close={handlerClickEnlace}></Modal>}

        </>
    )
}





