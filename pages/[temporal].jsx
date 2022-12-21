import Head from 'next/head'
import Image from 'next/image'
import NavbarSimple from '../components/NavbarSimple'
import { useUser } from '../context/Context.js'
import { WithoutAuth } from '../HOCs/WithoutAuth'
import Button from '../components/Button'
import Success from '../components/Success'
import TemplateNota from '../components/TemplateNota'
import Layout from '../layout/Layout'
import TextEditor from '../components/TextEditor'
import { handleSignOut, writeUserData, getESpecificData } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import Banner from '../components/Banner'

import styles from '../styles/Temporal.module.css'

import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('../components/content'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})


function TemplateOne() {
  const [textArea, setTextArea] = useState("");
  const { user, userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date } = useUser()
  const [arr, setArr] = useState([0])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [textEditor, setTextEditor] = useState("")
  const [value, setValue] = useState('');

  const [formViewer, setFormViewer] = useState(true)
  const [image, setImage] = useState({})

  const [firstParagraph, setFirstParagraph] = useState("")
  const [selection, setSelection] = useState("")
  const [endParagraph, setEndParagraph] = useState("")

  const [pluss, setPluss] = useState(false)
  // const [qr, setQr] = useState(true)
  // const [pdf, setPdf] = useState(true)



  const router = useRouter()

  const [formats, setFormats] = useState([
    'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'header', 'blockquote', 'code-block',
    'indent', 'list',
    'direction', 'align',
    'link', 'image', 'video', 'formula',
  ]);


  function handlerOnChange(e) {
    const name = e.target.name
    const value = e.target.value
    name == 'title' ? setTitle(value) : setDescription(value)
  }
  function handlerTextEditorOnChange(content, delta, source, editor) {
    console.log(editor.getHTML())
    setTextEditor(editor.getHTML())
  }


  function manageInputIMG(e) {
    const fileName = `${e.target.name}`
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setImage({ fileName, file, url })
  }

  function add(e) {
    setArr([...arr, arr.length])
  }




  // function validator(e, f) {
  //   e.preventDefault()

  //   switch (router.query.temporal.slice(0, 2)) {
  //     case '11':
  //       return save("Inicio")
  //       break;
  //     case '12':
  //       return save("Sociedad")
  //       break;
  //     case '13':
  //       return save("Salud")
  //       break;
  //     case '14':
  //       return save("Seguridad")
  //       break;
  //     case '15':
  //       return save("Politica")
  //       break;
  //     case '16':
  //       return save("Economia")
  //       break;
  //     case '17':
  //       return save("Deportes")
  //       break;
  //     case '18':
  //       return save("GestionDeGobierno")
  //       break;
  //     case '19':
  //       return save("Cultura")
  //       break;
  //     case '20':
  //       return save("Deportes")
  //       break;
  //     case '21':
  //       return save("Opinion")
  //       break;
  //     default:
  //       return setUserSuccess(false)
  //   }
  // }






  function validate() {

    switch (router.query.temporal.slice(0, 2)) {
      case '11':
        return "Inicio"
        break;
      case '12':
        return "Sociedad"
        break;
      case '13':
        return "Salud"
        break;
      case '14':
        return "Seguridad"
        break;
      case '15':
        return "Politica"
        break;
      case '16':
        return "Economia"
        break;
      case '17':
        return "Deportes"
        break;
      case '18':
        return "GestionDeGobierno"
        break;
      case '19':
        return "Cultura"
        break;
      case '20':
        return "Deportes"
        break;
      case '21':
        return "Opinion"
        break;
      default:
        return ''
    }
  }


  function save(e, st) {

    const ruteDB = `${validate()}/Posts/PostImage_${router.query.temporal.slice(2)}`
    const object = {
      nota: textEditor,
      title,
      description,
      state: st == 'B' ? 'Borrador' : 'Publicado',
      redactor: user.uid
    }

    writeUserData(ruteDB, object, setUserSuccess)
  }


  function formViewerHandler() {
    setFormViewer(!formViewer)
  }
  function arrItemsHandler() {
    if (arr.length > 2) {
      return
    }
    const copyListItems = [...arr]
    const arrPop = copyListItems.pop()
    setArr([...arr, arrPop == undefined ? 1 : arrPop + 1])
  }
  function handlerQR() {
    setQr(true)
  }
  function plussButton(key) {
    setPluss(!pluss)
  }
  function handlerPDF() {
    setPluss(!pluss)
  }
  function handlerClickEnlace(info) {
    router.pathname != "/Admin" && info.i !== undefined && router.push("/" + userDB[topic]["Posts"][`PostImage_${info.i}`])
    router.pathname == "/Admin" && setDataEditor(info)
  }


  useEffect(() => {
    userDB && setTitle(userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].title)
    userDB && setDescription(userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].description)
    userDB && setTextEditor(userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].nota)

  }, []);


  userDB && console.log(userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].nota)
  return (

    <Layout>

      <main className={styles.main}>
        <div>

          <NavbarSimple></NavbarSimple>

        </div>

        <div className={styles.containerBanner}>
          {userDB[validate()]["BannerTop"] && <Banner ruta={validate()} carpeta="BannerTop" click={handlerClickEnlace}></Banner>}
        </div>


        <div className={`${styles.viewer} ${formViewer == false && styles.hideForm}`}>

          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <img src={postsIMG[`${validate()}/PostImage_${router.query.temporal.slice(2)}`]} className={styles.image} alt="" />

          {userDB && userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].state == 'Publicado' || user ?
            <div className={styles.qlEditor} styles={{ padding: '0' }} >
              {parse(`${textEditor}`)}
              {userDB && postsIMG && console.log(`users/${userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].redactor}`)}
              <br />
              <div className={styles.perfil}>
                <img src={postsIMG[`users/${userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].redactor}`]} className={styles.perfilIMG} alt="" />
                {userDB.users[userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].redactor] && <p>{userDB.users[userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].redactor].name} <br /> Redactor</p>}
              </div>
            </div> : <div>En redacción...</div>
          }
          {formViewer == false ? <span className={styles.formHide} onClick={formViewerHandler}>▷</span> : ''}
        </div>

        <div className={styles.adds}>
          <img src="/publicidad.jpg" alt="" />
        </div>






        {user && <div className={`${styles.form} ${formViewer == true && styles.hideForm}`}>
          <label htmlFor="Title" >Titulo</label>
          <input type="text" id="Title" name="title" onChange={handlerOnChange} defaultValue={title} />
          <label htmlFor="Description" >Descripcion</label>
          <input type="text" id="Description" name="description" onChange={handlerOnChange} defaultValue={description} />

<div>

            <TextEditor setValue={handlerTextEditorOnChange} value={textEditor ? textEditor : userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].nota}></TextEditor>

</div>
<br />

          <div className={styles.buttonsContainer}>
            <Button style="miniButtonPrimary" click={(e) => save(e, 'B')}> Guardar/Borrador</Button>
            <Button style="miniButtonPrimary" click={(e) => save(e, 'P')}> Publicar</Button>
          </div>
        </div>}
        <span className={styles.formViewer} onClick={formViewerHandler}>▷</span>

        <TemplateNota topic={validate()} publicView={true} banner='none'></TemplateNota>

      </main>

      <br />

    </Layout>
  )
}
export default WithoutAuth(TemplateOne)


{/* <button className={`${styles.pluss} ${pluss === true ? styles.add : ''}`} onClick={arrItemsHandler}>A</button>
      <button className={`${styles.pluss} ${pluss === true ? styles.qr : ''}`} onClick={handlerQR}>P</button>
      <button className={`${styles.pluss} ${pluss === true ? styles.pdf : ''}`} onClick={handlerPDF}>B</button>
      <button className={`${styles.pluss}`} onClick={plussButton}>+</button> */}



{/* <label htmlFor="Image" >Imagen</label>
            <input type="file" id="Image" name="Image" onChange={manageInputIMG} /> */}




