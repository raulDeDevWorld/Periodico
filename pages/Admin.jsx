import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useUser } from '../context/Context.js'
import { WithAuth } from '../HOCs/WithAuth'
import Button from '../components/Button'
import Success from '../components/Success'
import Section from '../components/Section'
import Date from '../components/Date'

import styles from '../styles/Home.module.css'
import { handleSignOut } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


function Admin() {
  const { user, userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, setUserDate } = useUser()
  const router = useRouter()

  console.log(userDB)

  function handlerUploadFile(e, fileName) {
    const file = e.target.files[0]
    uploadIMG(file, fileName, setUserSuccess, postsIMG, setUserPostsIMG)
  }
  function handlerLogout(e) {
    handleSignOut()
    router.push("/Login")

  }

  function dateEvent (e) {
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  
  console.log(e.target.value)
  const format = e.target.value.split("-")
  console.log(format)
  setUserDate(`${parseInt(format[2]) }-${months[format[1]-1]}-${format[0]}`)
  
  }
  useEffect(() => {

    if (!user) router.replace('/Login')
  }, [user]);


  return (
    <div className={styles.container}>
      {success == "Cargando" && <Success>Cargando...</Success>}
      <main className={styles.main}>
        <div className={styles.containerLogout}>
          <span>Bienvenido Admin</span>
          <Button style="buttonPrimary" click={handlerLogout}>Logout</Button>
        </div>


        <div className={styles.header}>
          <label for="bannerIntro" className={styles.label} >Seleccionar Baner de Intro</label>
          <input type="file" id="bannerIntro" className={styles.inputFile} onChange={(e) => handlerUploadFile(e, `BannerIntro`)} accept="images" />
          <div className={styles.bannerIntroContainer}>
            {postsIMG.BannerIntro && <img className={styles.bannerIntroIMG} src={postsIMG.BannerIntro && postsIMG.BannerIntro} alt="Vercel Logo" />}
          </div>
          <div className={styles.fecha}>
            <Date></Date>    
<input type="date" id="start" name="trip" onChange={dateEvent}
        />
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
                <img src="/SocialMedia/instagram.png" alt="SocialMedia" />
              </div>
            </div>
            <video
              muted
              autoPlay={"autoplay"}
              preload="auto"
              loop
              className={styles.video}>
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <div></div>
          </div>
        </div>
        <Navbar navbar={userDB.navbar} />




        <Section topic="Inicio" publicView={false} ></Section>
        <Section topic="Sociedad" publicView={false} ></Section>
        <Section topic="Gestión De Gobierno" publicView={false} ></Section>
        <Section topic="Politica" publicView={false} ></Section>
        <Section topic="Salud" publicView={false} ></Section>
        <Section topic="Economia" publicView={false} ></Section>
        <Section topic="Deportes" publicView={false} ></Section>
        <Section topic="Culturas" publicView={false} ></Section>
        <Section topic="Empresarial" publicView={false} ></Section>
        <Section topic="Internacional" publicView={false} ></Section>
  <Section topic="Opinion" publicView={false} ></Section>









      </main>
    </div>
  )
}

export default WithAuth(Admin)









