import Head from 'next/head'
import Image from 'next/image'
import NavbarSimple from '../components/NavbarSimple'
import { useUser } from '../context/Context.js'
import { WithoutAuth } from '../HOCs/WithoutAuth'
import Button from '../components/Button'
import Success from '../components/Success'
import TemplateEight from '../components/TemplateEight'
import Layout from '../layout/Layout'
import TextEditor from '../components/TextEditor'
import { handleSignOut, writeUserData, getESpecificData } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';

import styles from '../styles/Temporal.module.css'

import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('../components/content'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})


function TemplateOne() {
  const [textArea, setTextArea] = useState("");
  const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date } = useUser()
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




  function validator(e, f) {
    e.preventDefault()

    switch (router.query.temporal.slice(0, 2)) {
      case '11':
        return save("Inicio")
        break;
      case '12':
        return save("Sociedad")
        break;
      case '13':
        return save("Salud")
        break;
      case '14':
        return save("Seguridad")
        break;
      case '15':
        return save("Politica")
        break;
      case '16':
        return save("Economia")
        break;
      case '17':
        return save("Deportes")
        break;
      case '18':
        return save("GestionDeGobierno")
        break;
      case '19':
        return save("Cultura")
        break;
      case '20':
        return save("Deportes")
        break;
      case '21':
        return save("Opinion")
        break;
      default:
        return setUserSuccess(false)
    }
  }






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


  function save(num) {

    const ruteDB = `${num}/Posts/PostImage_${router.query.temporal.slice(2)}`
    const object = {
      nota: textEditor,
      title,
      description,
      state: true
    }

    writeUserData(ruteDB, object, setUserSuccess)
  }

  function publish(e) {

    const ruteDB = `${num}/Posts/PostImage_${router.query.temporal.slice(2)}`
    const object = {
      nota: textEditor,
      estado: false
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



  useEffect(() => {
    userDB && setTitle(userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].title)
    userDB && setTitle(userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].description)

  }, []);


  userDB && console.log(userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].nota)
  return (

    <Layout>


      <main className={styles.main}>

        <NavbarSimple></NavbarSimple>

        <div className={styles.editor}>
          <div className={`${styles.form} ${formViewer == false && styles.hideForm}`}>

            {formViewer == true ? <span className={styles.formHide} onClick={formViewerHandler}>◁</span> : ''}
            <label htmlFor="Title" >Titulo</label>
            <input type="text" id="Title" name="title" onChange={handlerOnChange} defaultValue={title} />
            <label htmlFor="Description" >Descripcion</label>
            <input type="text" id="Description" name="description" onChange={handlerOnChange} defaultValue={description} />
            {/* <label htmlFor="Image" >Imagen</label>
            <input type="file" id="Image" name="Image" onChange={manageInputIMG} /> */}

            <TextEditor setValue={handlerTextEditorOnChange} value={textEditor ? textEditor : userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].nota }></TextEditor>

            {/* <textarea id="paragraph" name="paragraph" cols="30" rows="10" onSelect={currentSelection} onChange={handlerOnChange} value={data.paragraph && data.paragraph}></textarea> */}


            <div className={styles.buttonsContainer}>
              <Button style="miniButtonPrimary" click={(e) => validator(e, 'G')}> Guardar</Button>
              <Button style="miniButtonPrimary" click={(e) => validator(e, 'P')}> Publicar</Button>
            </div>
          </div>

          {/* <button className={`${styles.pluss} ${pluss === true ? styles.add : ''}`} onClick={arrItemsHandler}>A</button>
          <button className={`${styles.pluss} ${pluss === true ? styles.qr : ''}`} onClick={handlerQR}>P</button>
          <button className={`${styles.pluss} ${pluss === true ? styles.pdf : ''}`} onClick={handlerPDF}>B</button>
          <button className={`${styles.pluss}`} onClick={plussButton}>+</button> */}


          <div className={`${styles.viewer} ${formViewer == true && styles.hideForm}`}>

            
            <img className={styles.bannerIntroIMG} src="portada.jpg" alt="Vercel Logo" />
            <div className={styles.flex}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
              <img src={postsIMG[`${validate()}/PostImage_${router.query.temporal.slice(2)}`]} className={styles.image} alt="" />
              <  ReactQuill textEditor={userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].nota ? userDB[validate()].Posts[`PostImage_${router.query.temporal.slice(2)}`].nota : 'En redacción...'} />
            </div>
            <div className={styles.add}>

            </div>
            {formViewer == false ? <span className={styles.formHide} onClick={formViewerHandler}>▷</span> : ''}
          </div>


        </div>
        <TemplateEight topic={validate()} publicView={true}  banner='none'></TemplateEight>
      </main>

<br />
    </Layout>
  )
}
export default WithoutAuth(TemplateOne)











