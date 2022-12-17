import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useUser } from '../context/Context.js'
import { WithAuth } from '../HOCs/WithAuth'
import Button from '../components/Button'
import Success from '../components/Success'
import Section from '../components/Section'
import Date from '../components/Date'
import Layout from '../layout/Layout'
import TextEditor from '../components/TextEditor'
import { handleSignOut } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';

import styles from '../styles/Temporal.module.css'

import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic'

const ReactQuill = dynamic(()=>import('../components/content'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})


function TemplateOne() {
    const [textArea, setTextArea] = useState("");
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date } = useUser()
    const [arr, setArr] = useState([])

    const [data, setData] = useState({ paragraph: "" })
    const [textEditor, setTextEditor] = useState("")
    const [value, setValue] = useState('');

    const [formViewer, setFormViewer] = useState(true)
    const [image, setImage] = useState({})

    const [firstParagraph, setFirstParagraph] = useState("")
    const [selection, setSelection] = useState("")
    const [endParagraph, setEndParagraph] = useState("")


    const [formats, setFormats] = useState([
        'font','size',
        'bold','italic','underline','strike',
        'color','background',
        'script',
        'header','blockquote','code-block',
        'indent','list',
        'direction','align',
        'link','image','video','formula',
      ]);





    function handlerOnChange(e) {
        const name = e.target.name
        const value = e.target.value

        setData({ ...data, [name]: value })
    }
    function handlerTextEditorOnChange (content, delta, source, editor) {
        console.log(editor.getHTML())
        setTextEditor(editor.getHTML())
    }

   console.log(value)

    function manageInputIMG(e) {
        const fileName = `${e.target.name}`
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        setImage({ fileName, file, url })
    }

    function add(e) {
        setArr([...arr, arr.length])
    }
    function formViewerHandler() {
        setFormViewer(!formViewer)
    }

    return (

        <Layout>

         
                <main className={styles.main}>

                    <Navbar></Navbar>
                    <select className={styles.select} name={`Template`} onChange={handlerOnChange}>
                        <option value="TemplateOne" >Plantilla 1</option>
                        <option value="TemplateThreeA" sel>Plantilla 2</option>
                        <option value="TemplateThreeB" sel>Plantilla 3</option>
                        <option value="TemplateFour" s>Plantilla 4</option>
                        <option value="TemplateFive" s>Plantilla 5</option>
                        <option value="TemplateSix" >Plantilla 6</option>
                    </select>

                    <div className={styles.editor}>

                        <form className={`${styles.form} ${formViewer == false && styles.hideForm}`}>

                            {formViewer == true ? <span className={styles.formHide} onClick={formViewerHandler}>◁</span> : ''}
                            <label htmlFor="Title" >Titulo</label>
                            <input type="text" id="Title" name="Title" onChange={handlerOnChange} />
                            <label htmlFor="Description" >Descripcion</label>
                            <input type="text" id="Description" name="Description" onChange={handlerOnChange} />
                            <label htmlFor="Image" >Imagen</label>
                            <input type="file" id="Image" name="Image" onChange={manageInputIMG} />

                            <label htmlFor="paragraph">Redactar contenido</label>
                           
                     <TextEditor setValue={handlerTextEditorOnChange} value={textEditor}></TextEditor>

                            {/* <textarea id="paragraph" name="paragraph" cols="30" rows="10" onSelect={currentSelection} onChange={handlerOnChange} value={data.paragraph && data.paragraph}></textarea> */}
                            {/* <div className={styles.buttonsContainer}>
                                <Button style="miniButtonPrimary"> Guardar</Button>
                                <Button style="miniButtonPrimary"> Publicar</Button>
                            </div> */}

                        </form>

                        <div className={styles.viewer}>
                            <img className={styles.bannerIntroIMG} src="portada.jpg" alt="Vercel Logo" />
                            <div className={styles.flex}>
                                <h2 className={styles.title}>{data.Title}</h2>
                                <p className={styles.description}>{data.Description}</p>
                                <img src={image.url} className={styles.image} alt="" />
                                <h4 className={styles.subtitle}>{data.Subtitle}</h4>
                                <  ReactQuill textEditor={textEditor} />
                            </div>
                            {formViewer == false ? <span className={styles.formViewer} onClick={formViewerHandler}>▷</span> : ''}
                        </div>
                    </div>
                </main>
    

        </Layout>
    )
}
export default TemplateOne


