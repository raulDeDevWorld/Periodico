import { writeUserData, getData } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useUser } from '../context/Context.js'
import Button from '../components/Button'
import style from '../styles/Form.module.css'
import { getDate, getDayMonthYear, getMonthAndYear} from '../utils/Utils'


export default function Form({ topic, value }) {
  const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, monthAndYear, dayMonthYear } = useUser()





  function handlerEventChange(e) { 
    const monthYear = getMonthAndYear() 
    const key = e.target.name
    const object = { [`${key}`]: e.target.value }
    writeUserData(`${monthYear}/${topic}/`, object, setUserSuccess)
  }
  function handlerUploadFile(e) {
    const monthYear = getMonthAndYear() 
    const fileName = `${e.target.name}`
    const file = e.target.files[0]
    
    uploadIMG(userDB, file, fileName, `${monthYear}/${topic}`,  setUserSuccess, postsIMG, setUserPostsIMG, monthAndYear)
  }

  return (
    <form className={style.form} action="">
      <select className={style.select} name={`${topic}-Template-${dayMonthYear}`} onChange={handlerEventChange}>
        <option value="TemplateOne" selected={value == "TemplateOne" ? true : false}>Plantilla 1</option>
        <option value="TemplateThreeA" selected={value == "TemplateThreeA" ? true : false}>Plantilla 2</option>
        <option value="TemplateThreeB" selected={value == "TemplateThreeB" ? true : false}>Plantilla 3</option>
        <option value="TemplateFour" selected={value == "TemplateFour" ? true : false}>Plantilla 4</option>
        <option value="TemplateFive" selected={value == "TemplateFive" ? true : false}>Plantilla 5</option>
        <option value="TemplateSix" selected={value == "TemplateSix" ? true : false}>Plantilla 6</option>
      </select>
      <div className={style.formInputs}>
        <div>
          <label htmlFor={`${topic}-Post`} className={style.label} >Subir Post</label>
          <input type="file" id={`${topic}-Post`} className={style.inputFile} name={`Post`} onChange={handlerUploadFile} accept="images" />
          <input type="text" placeholder='Descripción' name="Descripcion-Post1" defaultValue={userDB[`${topic}-Descripcion-Post1-${date}`]} onChange={handlerEventChange}/>
          <input type="text" placeholder='Enlace' name="Enlace-Post1" onChange={handlerEventChange}/>
          <div className={style.radioInputs}>
            <input type="radio" value="left" name="objectPosition-Post1" onChange={handlerEventChange}/> L
            <input type="radio" value="top" name="objectPosition-Post1" onChange={handlerEventChange}/> T
            <input type="radio" value="center" name="objectPosition-Post1" onChange={handlerEventChange}/> C
            <input type="radio" value="bottom" name="objectPosition-Post1" onChange={handlerEventChange}/> B
            <input type="radio" value="right" name="objectPosition-Post1" onChange={handlerEventChange}/> R
          </div>
        </div>
     

        <div>
          <label htmlFor={`${topic}-bannerTop`} className={style.label} >Seleccionar Banner Top</label>
          <input type="file" id={`${topic}-bannerTop`} className={style.inputFile} name={`bannerTop`} onChange={handlerUploadFile} accept="images" />
          {/*<input type="text" placeholder='Descripción' name="Descripcion-bannerTop" onChange={handlerEventChange}/>*/}
          <input type="text" placeholder='Enlace' name="Enlace-bannerTop" onChange={handlerEventChange}/>
          <div className={style.radioInputs}>
            <input type="radio" value="left" name="objectPosition-bannerTop" onChange={handlerEventChange}/> L
            <input type="radio" value="top" name="objectPosition-bannerTop" onChange={handlerEventChange}/> T
            <input type="radio" value="center" name="objectPosition-bannerTop" onChange={handlerEventChange}/> C
            <input type="radio" value="bottom" name="objectPosition-bannerTop" onChange={handlerEventChange}/> B
            <input type="radio" value="right" name="objectPosition-bannerTop" onChange={handlerEventChange}/> R
          </div>
        </div>
        <div>
          <label htmlFor={`${topic}-bannerBottom`} className={style.label} >Seleccionar Banner Bottom </label>
          <input type="file" id={`${topic}-bannerBottom`} className={style.inputFile} name={`bannerBottom`} onChange={handlerUploadFile} accept="images" />
{    /*      <input type="text" placeholder='Descripción' name="Descripcion-bannerBottom" onChange={handlerEventChange}/> */}
          <input type="text" placeholder='Enlace' name="Enlace-bannerBottom" onChange={handlerEventChange}/>
          <div className={style.radioInputs}>
            <input type="radio" value="lrft" name="objectPosition-bannerBottom" onChange={handlerEventChange}/> L
            <input type="radio" value="top" name="objectPosition-bannerBottom" onChange={handlerEventChange}/> T
            <input type="radio" value="center" name="objectPosition-bannerBottom" onChange={handlerEventChange}/> C
            <input type="radio" value="bottom" name="objectPosition-bannerBottom" onChange={handlerEventChange}/> B
            <input type="radio" value="right" name="objectPosition-bannerBottom" onChange={handlerEventChange}/> R
          </div>
        </div>
      </div>

    </form>
  )
}




  { /* <div>
          <label htmlFor={`${topic}-Post2`} className={style.label} >Seleccionar Post 2</label>
          <input type="file" id={`${topic}-Post2`} className={style.inputFile} name={`Post2`} onChange={handlerUploadFile} accept="images" />
          <input type="text" placeholder='Descripción' name="Descripcion-Post2" defaultValue={userDB[`${topic}-Descripcion-Post2-${date}`]} onChange={handlerEventChange}/>
          <input type="text" placeholder='Enlace' name="Enlace-Post2" onChange={handlerEventChange}/>
          <div className={style.radioInputs}>
            <input type="radio" value="left" name="objectPosition-Post2" onChange={handlerEventChange}/> L
            <input type="radio" value="top" name="objectPosition-Post2" onChange={handlerEventChange}/> T
            <input type="radio" value="center" name="objectPosition-Post2" onChange={handlerEventChange}/> C
            <input type="radio" value="bottom" name="objectPosition-Post2" onChange={handlerEventChange}/> B
            <input type="radio" value="right" name="objectPosition-Post2" onChange={handlerEventChange}/> R
          </div>
        </div>

        <div>
          <label htmlFor={`${topic}-Post3`} className={style.label} >Seleccionar Post 3</label>
          <input type="file" id={`${topic}-Post3`} className={style.inputFile} name={`Post3`} onChange={handlerUploadFile} accept="images" />
          <input type="text" placeholder='Descripción' name="Descripcion-Post3" defaultValue={userDB[`${topic}-Descripcion-Post3-${date}`]} onChange={handlerEventChange}/>
          <input type="text" placeholder='Enlace' name="Enlace-Post3" onChange={handlerEventChange}/>
          <div className={style.radioInputs}>
            <input type="radio" value="left" name="objectPosition-Post3" onChange={handlerEventChange}/> L
            <input type="radio" value="top" name="objectPosition-Post3" onChange={handlerEventChange}/> T
            <input type="radio" value="center" name="objectPosition-Post3" onChange={handlerEventChange}/> C
            <input type="radio" value="bottom" name="objectPosition-Post3" onChange={handlerEventChange}/> B
            <input type="radio" value="rigth" name="objectPosition-Post3" onChange={handlerEventChange}/> R
          </div>
        </div>
        <div>

          <label htmlFor={`${topic}-Post4`} className={style.label} >Seleccionar Post 4</label>
          <input type="file" id={`${topic}-Post4`} className={style.inputFile} name={`Post4`} onChange={handlerUploadFile} accept="images" />
          <input type="text" placeholder='Descripción' name="Descripcion-Post4" defaultValue={userDB[`${topic}-Descripcion-Post4-${date}`]} onChange={handlerEventChange}/>
          <input type="text" placeholder='Enlace' name="Enlace-Post4" onChange={handlerEventChange}/>
          <div className={style.radioInputs}>
            <input type="radio" value="left" name="objectPosition-Post4" onChange={handlerEventChange}/> L
            <input type="radio" value="top" name="objectPosition-Post4" onChange={handlerEventChange}/> T
            <input type="radio" value="center" name="objectPosition-Post4" onChange={handlerEventChange}/> C
            <input type="radio" value="bottom" name="objectPosition-Post4" onChange={handlerEventChange}/> B
            <input type="radio" value="right" name="objectPosition-Post4" onChange={handlerEventChange}/> R
          </div>
        </div>

        <div>
          <label htmlFor={`${topic}-Post5`} className={style.label} >Seleccionar Post 5</label>
          <input type="file" id={`${topic}-Post5`} className={style.inputFile} name={`Post5`} onChange={handlerUploadFile} accept="images" />
          <input type="text" placeholder='Descripción' name="Descripcion-Post5" defaultValue={userDB[`${topic}-Descripcion-Post5-${date}`]} onChange={handlerEventChange}/>
          <input type="text" placeholder='Enlace' name="Enlace-Post5" onChange={handlerEventChange}/>
          <div className={style.radioInputs}>
            <input type="radio" value="lrft" name="objectPosition-Post5" onChange={handlerEventChange}/> L
            <input type="radio" value="top" name="objectPosition-Post5" onChange={handlerEventChange}/> T
            <input type="radio" value="center" name="objectPosition-Post5" onChange={handlerEventChange}/> C
            <input type="radio" value="bottom" name="objectPosition-Post5" onChange={handlerEventChange}/> B
            <input type="radio" value="right" name="objectPosition-Post5" onChange={handlerEventChange}/> R
          </div>
        </div>

        <div>
          <label htmlFor={`${topic}-Post6`} className={style.label} >Seleccionar Post 6</label>
          <input type="file" id={`${topic}-Post6`} className={style.inputFile} name={`Post6`} onChange={handlerUploadFile} accept="images" />
          <input type="text" placeholder='Descripción' name="Descripcion-Post6" defaultValue={userDB[`${topic}-Descripcion-Post6-${date}`]} onChange={handlerEventChange}/>
          <input type="text" placeholder='Enlace' name="Enlace-Post6" onChange={handlerEventChange}/>
          <div className={style.radioInputs}>
            <input type="radio" value="lrft" name="objectPosition-Post6" onChange={handlerEventChange}/> L
            <input type="radio" value="top" name="objectPosition-Post6" onChange={handlerEventChange}/> T
            <input type="radio" value="center" name="objectPosition-Post6" onChange={handlerEventChange}/> C
            <input type="radio" value="bottom" name="objectPosition-Post6" onChange={handlerEventChange}/> B
            <input type="radio" value="right" name="objectPosition-Post6" onChange={handlerEventChange}/> R
          </div>
  </div>*/}