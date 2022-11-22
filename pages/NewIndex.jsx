import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
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



  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Header></Header>
        {showImg == true && <div className={styles.gridIMG}>{Object.values(postsIMG).map((i, index) => {
          return (
            <img src={i} key={index} alt="Vercel Logo" />
          )
        })}</div>}
        <Section topic="Inicio" publicView={true} ></Section>
        <Section topic="Sociedad" publicView={true} ></Section>
        <Section topic="Seguridad" publicView={true} ></Section>
        <Section topic="GestionDeGobierno" publicView={true} ></Section>
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
            <div className={styles.footerItemsContainer}>
              <img src="/vision.svg" alt="" />
              <p>Informar, educar y contribuir a la formación de una cultura ciudadana en torno a la realidad nacionale internacional.</p>

            </div>
          </div>
          <div>
            <h5>PUBLICIDAD ONLINE</h5>
            <div className={styles.footerItemsContainer}>
              <img src="/contact.svg" alt="" />
              <p>(519-2) 2488973 <br /> 73002076 <br />60101760</p>
            </div>
          </div>
          <div>
            <h5>VISIÓN</h5>
            <div className={styles.footerItemsContainer}>
              <img src="/mision.svg" alt="" />
              <p>Ser el medio impreso y digital de mayor influencia en la construccion de un cultura ciudadana en torno a la realidad nacional e internacional</p>
            </div>
          </div>
          <div>
            <h5>DIRECCIÓN</h5>
            <div className={styles.footerItemsContainer}>
              <img src="/ubication.svg" alt="" />
              <p>Calle Cañada Strongest, <br /> No. 1782 esq. Capitán Castrillo, <br /> Edif. Napolis, Piso 6, Of. 6B <br /> Zona San Pedro</p>
            </div>

          </div>
          <div>
            <h5>SIGUENOS EN</h5>

          </div>
          <div>
            <h5>ESCRIBENOS A</h5>

          </div>
          <span>hoy.bo <br /> Desarrollado por Swoou.com <br /> ©copyright 2022</span>
        </footer>
      </main>
    </div>
  )
}

export default WithoutAuth(Home)




