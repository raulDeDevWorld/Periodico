import { writeUserData, getData } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useUser } from '../context/Context.js'
import Button from '../components/Button'
import Error from '../components/Error'
import style from '../styles/Form.module.css'
import { useState } from 'react'
import { getDate, getDayMonthYear, getMonthAndYear } from '../utils/Utils'
import FormAddsC from './FormAddsC'


export default function Form({ topic, value, color }) {
  const { user, userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, monthAndYear, dayMonthYear, viewPeriodista } = useUser()

  const [data, setData] = useState({})

  const [postImage, setPostImage] = useState(null)
  const [urlPostImage, setUrlPostImage] = useState(null)

  function manageInputIMG(e) {
    const fileName = `${e.target.name}`
    const file = e.target.files[0]

    if (fileName === 'PostImage') {
      setPostImage(file)
      setUrlPostImage(URL.createObjectURL(file))
    }
  }

  function manageTemplate(e) {
    //const monthYear = monthAndYear ? monthAndYear : getMonthAndYear()
    const ruteDB = `/${topic}/Templates` // /Inicio
    const value = e.target.value

    const object = { [dayMonthYear]: value }
    writeUserData(ruteDB, object, setUserSuccess)
  }

  function handlerEventChange(e) {
    const name = e.target.name
    const value = e.target.value
    const object = { [name]: value }
    setData({ ...data, ...object })
  }


  function validator(e) {
    e.preventDefault()

    switch (topic) {
      case "Inicio":
        return save(11)
        break;
      case "Sociedad": 
        return save(12)
        break;
      case "Salud":
        return save(13)
        break; 
      case "Seguridad":
        return save(14)
        break;
      case "Politica":
        return save(15)
        break;
      case "Economia": 
        return save(16)
      case "Deportes":
        return save(17)
        break; 
      case "GestionDeGobierno":
        return save(18)
        break;
      case "Cultura": 
        return save(19)
        break;
      case "Deportes": 
        return save(20)
        break; 
      case "Opinion":
        return save(21)
        break;
      default:
        return setUserSuccess(false)
    }

  }



  function save(num) {


    const monthYear = monthAndYear ? monthAndYear : getMonthAndYear()
    const newDate = new Date()

    if (postImage) {
      const ruteDB = `/${topic}/Posts` // Nov-2022/Inicio
      const ruteSTG = `${topic}` // Nov-2022/
      const fileName = `PostImage_${newDate.getTime()}` // PostImage_Tue Nov 15 2022 
      const object = { [fileName]: {fecha: newDate.toString(), description: data.descriptionPost ? data.descriptionPost : '', enlace: data.enlacePost ? data.enlacePost : `${num}${newDate.getTime()}`, objectFit: data.objectPositionPost ? data.objectPositionPost : 'center', nota:'' } }
      writeUserData(ruteDB, object, setUserSuccess, setUserData)
      uploadIMG(ruteSTG, fileName, postImage, setUserSuccess, monthYear)
    } else {
      setUserSuccess("CompleteIMG")
    }

  }

  return (
    <div className={style.form} style={{ backgroundColor: color }}>
      <select className={style.select} name={`${topic}-Template-${dayMonthYear}`} onChange={manageTemplate} style={{ backgroundColor: color, fontWeight: 'bold', border: '2px solid brown' }}>
        <option value="#" selected={value == "TemplateOne" ? true : false}>Ninguno-{topic}</option>
        <option value="TemplateOne" selected={value == "TemplateOne" ? true : false}>Plantilla 1-{topic}</option>
        <option value="TemplateThreeA" selected={value == "TemplateThreeA" ? true : false}>Plantilla 2-{topic}</option>
        <option value="TemplateThreeB" selected={value == "TemplateThreeB" ? true : false}>Plantilla 3-{topic}</option>
        <option value="TemplateFour" selected={value == "TemplateFour" ? true : false}>Plantilla 4-{topic}</option>
        <option value="TemplateFive" selected={value == "TemplateFive" ? true : false}>Plantilla 5-{topic}</option>
        <option value="TemplateSix" selected={value == "TemplateSix" ? true : false}>Plantilla 6-{topic}</option>
        <option value="TemplateSeven" selected={value == "TemplateSeven" ? true : false}>Plantilla 7-{topic}</option>
        <option value="TemplateEight" selected={value == "TemplateEight" ? true : false}>Plantilla 8-{topic}</option>
      </select>

      {userDB && userDB.users[user.uid] && userDB.users[user.uid].rol === 'periodista' || viewPeriodista == true ?

        <div className={style.formInputs}>
          <form className={style.formSelectPost}>
            <label htmlFor={`${topic}-Post`} className={style.label} >A??adir publicaci??n </label>
            <img className={style.previewIMG} style={{ objectPosition: `${data.objectPositionPost ? data.objectPositionPost : 'center'} ` }} src={urlPostImage} alt="" />
            <p className={`${style.require} ${postImage ? style.green : ''}`}>{postImage ? 'Correcto' : '*Imagen Requerida'}</p>
            <input type="file" id={`${topic}-Post`} className={style.inputFile} name={`PostImage`} onChange={manageInputIMG} accept=".jpg, .jpeg, .png, .mp4, webm" />
            <input type="text" placeholder='Titular' name="descriptionPost" onChange={handlerEventChange} />
            <input type="text" placeholder='Enlace' name="enlacePost" onChange={handlerEventChange} />
            <div className={style.radioInputs}>
              <input type="radio" value="left" name="objectPositionPost" onChange={handlerEventChange} /> ???
              <input type="radio" value="top" name="objectPositionPost" onChange={handlerEventChange} /> ???
              <input type="radio" value="center" name="objectPositionPost" onChange={handlerEventChange} /> c
              <input type="radio" value="bottom" name="objectPositionPost" onChange={handlerEventChange} /> ???
              <input type="radio" value="right" name="objectPositionPost" onChange={handlerEventChange} /> ???
            </div>
            <Button style="buttonMiniSecondary" click={validator}>Guardar</Button>
          </form>
        </div> : ''
      }

      {userDB && userDB.users[user.uid] && userDB.users[user.uid].rol === 'admin' && viewPeriodista == false && <>
        <div className={`${style.formInputsAdmin} ${style.formInputs}`}>
          <FormAddsC ruteDB={`/${topic}/BannerTop`} ruteSTG='Banners' id={`/${topic}/BannerTop`} title='A??adir Banner Cabecera' />
          <FormAddsC ruteDB={`/${topic}/BannerBottom`} ruteSTG='Banners' id={`/${topic}/BannerBottom`} title='A??adir Banner Pie' />
        </div>
      </>}
    </div>
  )
}




