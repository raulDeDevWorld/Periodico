import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useUser } from '../context/Context.js'
import { WithAuth } from '../HOCs/WithAuth'
import Button from '../components/Button'
import Success from '../components/Success'
import Error from '../components/Error'

import BannerLeft from '../components/BannerLeft'
import BannerRight from '../components/BannerRight'

import Section from '../components/Section'
import Date from '../components/Date'
import Header from '../components/Header'

import styles from '../styles/Home.module.css'
import { handleSignOut } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function Admin() {
  const { user, userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, setUserDate } = useUser()
  const router = useRouter()


  //console.log(postsIMG)

  function handlerUploadFile(e, fileName) {
    const file = e.target.files[0]
    uploadIMG(file, fileName, setUserSuccess, postsIMG, setUserPostsIMG)
  }

  const [elements, setElements] = useState(false)
  const [dataForDate, setDataForDate] = useState([])
  const [dataEditor, setDataEditor] = useState(null)

  function setPostsElements() {
      setElements(!elements)
  }


  function handlerLogout(e) {
    handleSignOut()
    router.push("/Login")

  }

  function dateEvent(e) {
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

    console.log(e.target.value)
    const format = e.target.value.split("-")
    console.log(format)
    setUserDate(`${parseInt(format[2])}-${months[format[1] - 1]}-${format[0]}`)

  }


  function handlerClickEnlace(i) {
    router.pathname != "/Admin" && router.push("/" + userDB[topic]["Posts"][`PostImage_${i}`])
    router.pathname == "/Admin" && setDataEditor(i)
  }
  useEffect(() => {

    if (!user) router.replace('/Login')


  }, [user]);


  return (
    <div className={styles.container}>
      {userDB["BannerLeft"] && <BannerLeft ruta={'/BannerLeft'} carpeta="BannerLeft" click={handlerClickEnlace}></BannerLeft>}
      {userDB["BannerRight"] && <BannerRight ruta={'/BannerRight'} carpeta="BannerRight" click={handlerClickEnlace}></BannerRight>}

      {success === "CompleteFORM" && <Error>Complete el formulario...</Error>}

      {success === "CompleteFechaInit" && <Error>Complete la fecha de inicio...</Error>}
      {success === "CompleteFechaFinish" && <Error>Complete la fecha final...</Error>}
      {success === "CompleteIMG" && <Error>Añade una imagen...</Error>}
      {success == "Cargando" && <Success>Cargando...</Success>}
      <main className={styles.main}>
        <div className={styles.containerLogout}>
          <span>Bienvenido Admin</span>
          <Button style="buttonPrimary" click={handlerLogout}>Logout</Button>
        </div>

        <Header></Header>


        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>

        <Section topic="Inicio" publicView={false} ></Section>
        <Section topic="Sociedad" publicView={false} ></Section>
        <Section topic="Salud" publicView={false} ></Section>
        <Section topic="Seguridad" publicView={false} ></Section>
        <Section topic="Politica" publicView={false} ></Section>
        <Section topic="Economia" publicView={false} ></Section>
        <Section topic="Deportes" publicView={false} ></Section>
        <Section topic="GestionDeGobierno" publicView={false} ></Section>
        <Section topic="Cultura" publicView={false} ></Section>
        <Section topic="Internacional" publicView={false} ></Section>
        <Section topic="Opinion" publicView={false} ></Section>









      </main>
    </div>
  )
}

export default WithAuth(Admin)









