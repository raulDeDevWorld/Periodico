import Head from 'next/head'
import Image from 'next/image'
import { useUser } from '../context/Context.js'
import { WithoutAuth } from '../HOCs/WithoutAuth'
import Button from '../components/Button'

import Link from 'next/link'
import FormAdds from '../components/FormAdds'
import Layout from '../layout/Layout'

import BannerLeft from '../components/BannerLeft'
import BannerRight from '../components/BannerRight'
import BannerPortada from '../components/BannerPortada'

import Success from '../components/Success'
import Error from '../components/Error'

import Section from '../components/Section'
import Date from '../components/Date'
import Header from '../components/Header'

import styles from '../styles/Home.module.css'
import { handleSignOut } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function Home() {
  const { userDB, setUserData, monthAndYear, setUserSuccess, success, postsIMG, showImg, date, setUserDate } = useUser()
  const router = useRouter()

  const [periodicoPDF, setPeriodicoPDF] = useState(false);
  const [periodicoPDFEffect, setPeriodicoPDFEffect] = useState(false);

  function handlerClickEnlace(data) {
    router.pathname != "/Admin" && window.open(data.href, data.target)
    router.pathname == "/Admin" && setDataEditor(i)
    // console.log(data.href, data.target)

  }



  function whatsappClickHandler() {
    router.push("https://api.whatsapp.com/send?phone=+59160589090&text=Buenas%20Hoy...")
  }

  function handlerPDFView(parametro) {
    parametro && setPeriodicoPDFEffect(true)
    setPeriodicoPDF(!periodicoPDF)
  }



  const periodicoPDFImg = {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
    borderRadius: '5px',
    boxShadow: '0 0 15px black',
    transition: 'all',
    transitionDuration: '.3s',

  }



  // useEffect(() => {
  //   if (periodicoPDFEffect == true) {
  //     return
  //   }
  //   setTimeout(() => {
  //     setPeriodicoPDF(!periodicoPDF)
  //   }, 2000)

  // }, [periodicoPDF == "User" ? '' : periodicoPDF])
  console.log(postsIMG)
  return (
    <Layout>
      <div className={styles.main}>
        <Header></Header>
        {showImg ?

          <div className={styles.gridImages}>

            {Object.keys(postsIMG).map((i, index) => {
              if (i.split('/')[0].includes('Banners')) {
                return
              }
              return <div className={styles.image}>
                <Link href={i.split('/')[0].includes('Banners') == false && userDB[i.split('/')[0]] && userDB[i.split('/')[0]].Posts && userDB[i.split('/')[0]].Posts[i.split('/')[1]] && userDB[i.split('/')[0]].Posts[i.split('/')[1]].enlace ? userDB[i.split('/')[0]]["Posts"][i.split('/')[1]]['enlace']: '#'} legacyBehavior>
                  <a target='_blank'>
                    <img className={styles.image} src={postsIMG[i]} alt="img" />
                    {/* {console.log(i.split('/')[1])} */}
                    {console.log(i.split('/')[0].includes('Banners') == false && userDB[i.split('/')[0]] && userDB[i.split('/')[0]].Posts && userDB[i.split('/')[0]].Posts[i.split('/')[1]] && userDB[i.split('/')[0]].Posts[i.split('/')[1]].description && userDB[i.split('/')[0]].Posts[i.split('/')[1]].description)}
                    <span className={styles.description}>{i.split('/')[0].includes('Banners') == false && userDB[i.split('/')[0]] && userDB[i.split('/')[0]].Posts && userDB[i.split('/')[0]].Posts[i.split('/')[1]] && userDB[i.split('/')[0]].Posts[i.split('/')[1]].description && userDB[i.split('/')[0]].Posts[i.split('/')[1]].description}</span>
                  </a>
                </Link >
              </div>
            })}

          </div>





          : <>
            <Section topic="Inicio" publicView={true} color=''></Section>
            <Section topic="Sociedad" publicView={true} color=''></Section>
            <Section topic="Salud" publicView={true} color=''></Section>
            <Section topic="Seguridad" publicView={true} color=''></Section>
            <Section topic="Politica" publicView={true} color=''></Section>
            <Section topic="Economia" publicView={true} color=''></Section>
            <Section topic="Deportes" publicView={true} color=''></Section>
            <Section topic="GestionDeGobierno" publicView={true} color=''></Section>
            <Section topic="Cultura" publicView={true} color=''></Section>
            <Section topic="Internacional" publicView={true} color=''></Section>
            <Section topic="Empresarial" publicView={true} color=''></Section>
          </>}
      </div>
    </Layout>
  )
}

export default WithoutAuth(Home)



{/* {showImg == true && <div className={styles.gridIMG}>{Object.values(postsIMG).map((i, index) => 

            <img src={i} key={index} alt="Vercel Logo" />

        )}</div>} */}

{/* <div className={`${styles.periodicoPDFContainer} ${periodicoPDF === false ? styles.periodicoPDFView : ''}`}>
        <Link href="https://drive.google.com/file/d/13waX1Uh82ocFDetKArTXOByTOKkMtmQf/view?usp=share_link" legacyBehavior>
          <a target='_blanck'>{periodicoPDF === true && 
          <Image src="/periodico.jpeg" width={100} height={100} style={periodicoPDFImg} quality={1}></Image>
          // <img src="/periodico.jpeg" className={styles.periodicoPDFImg} alt="" />
          }
          </a>
        </Link>
      </div>

      <div className={`${styles.periodicoPDFContainer2} `}>
        <Link href="https://drive.google.com/file/d/13waX1Uh82ocFDetKArTXOByTOKkMtmQf/view?usp=share_link" legacyBehavior>
          <a target='_blanck'><img src="/gobierno.jpg" className={styles.periodicoPDFImg} alt="" />
          </a>
        </Link>
      </div> */}