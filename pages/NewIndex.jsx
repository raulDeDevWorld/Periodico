import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import PostOne from '../components/PostOne'
import PostTwo from '../components/PostTwo'
import Mantenimiento from '../components/Mantenimiento'
import Section from '../components/Section'
import Date from '../components/Date'
import { useUser } from '../context/Context.js'
import { WithoutAuth } from '../HOCs/WithoutAuth'
import styles from '../styles/Home.module.css'
import { writeUserData, uploadIMG } from '../firebase/utils'
function Home() {
  const { userDB, setUserData, setUserSuccess, success, postsIMG, showImg, date, setUserDate } = useUser()

  function dateEvent(e) {
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

    console.log(e.target.value)
    const format = e.target.value.split("-")
    console.log(format)
    setUserDate(`${parseInt(format[2])}-${months[format[1] - 1]}-${format[0]}`)

  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
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
                <img src="/SocialMedia/tiktok.png" alt="SocialMedia" />
              </div>
            </div>
            <video
              muted
              autoPlay={"autoplay"}
              preload="auto"
              loop
              className={styles.video}>
              <source src="/video.mp4" type="video/mp4" />
            </video></div>


        </div>
        <Navbar navbar={userDB.navbar} />
        {showImg == true && <div className={styles.gridIMG}>{Object.values(postsIMG).map((i, index) => {
          return (
            <img src={i} key={index} alt="Vercel Logo" />
          )
        })}</div>}
        <Section topic="Inicio" publicView={true} ></Section>
        <Section topic="Sociedad" publicView={true} ></Section>
        <Section topic="Gestión De Gobierno" publicView={true} ></Section>
        <Section topic="Politica" publicView={true} ></Section>
        <Section topic="Salud" publicView={true} ></Section>
        <Section topic="Economia" publicView={true} ></Section>
        <Section topic="Deportes" publicView={true} ></Section>
        <Section topic="Culturas" publicView={true} ></Section>
        <Section topic="Empresarial" publicView={true} ></Section>
        <Section topic="Internacional" publicView={true} ></Section>
        <Section topic="Opinion" publicView={true} ></Section>




        <footer className={styles.footer} id="nosotros">
          <div>
            <h5>MISIÓN</h5>
            <p>Informar, educar y contribuir a la formación de una cultura ciudadana en torno a la realidad nacionale internacional.</p>
          </div>
          <div>
            <h5>PUBLICIDAD ONLINE</h5>
            <span>(519-2) 2488973</span>
            <span>73002076</span>
            <span>60101760</span>
          </div>
          <div>
            <h5>VISIÓN</h5>
            <p>Ser el medio impreso y digital de mayor influencia en la construccion de un cultura ciudadana en torno a la realidad nacional e internacional</p>
          </div>
          <div>
            <h5>DIRECCIÓN</h5>
            <p>Calle Cañada Strongest, <br /> No. 1782 esq. Capitán Castrillo, <br /> Edif. Napolis, Piso 6, Of. 6B <br /> Zona San Pedro</p>
          </div>
          <div>
            <h5>SIGUENOS EN</h5>

          </div>
          <div>
            <h5>ESCRIBENOS A</h5>

          </div>
        </footer>
      </main>
    </div>
  )
}

export default WithoutAuth(Home)




