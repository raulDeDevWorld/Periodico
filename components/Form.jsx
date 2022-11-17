import { writeUserData, getData } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useUser } from '../context/Context.js'
import Button from '../components/Button'
import style from '../styles/Form.module.css'
import { useState } from 'react'
import { getDate, getDayMonthYear, getMonthAndYear } from '../utils/Utils'


export default function Form({ topic, value }) {
  const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, monthAndYear, dayMonthYear } = useUser()

  const [data, setData] = useState({})

  const [postImage, setPostImage] = useState(null)
  const [urlPostImage, setUrlPostImage] = useState(null)

  const [bannerTopImage, setBannerTopImage] = useState(null)
  const [urlBannerTopImage, setUrlBannerTopImage] = useState(null)

  const [bannerBottomImage, setBannerBottomImage] = useState(null)
  const [urlBannerBottomImage, setUrlBannerBottomImage] = useState(null)


  function manageInputIMG(e) {
    const fileName = `${e.target.name}`
    const file = e.target.files[0]

    if (fileName === 'PostImage') {
      setPostImage(file)
      setUrlPostImage(URL.createObjectURL(file))
    }

    if (fileName === 'BannerTopImage') {
      setBannerTopImage(file)
      setUrlBannerTopImage(URL.createObjectURL(file))
    }

    if (fileName === 'BannerBottomImage') {
      setBannerBottomImage(file)
      setUrlBannerBottomImage(URL.createObjectURL(file))
    }
  }

function manageTemplate (e) {
  const monthYear = monthAndYear ? monthAndYear : getMonthAndYear()
  const ruteDB = `${monthYear}/${topic}/Templates` // Nov-2022/Inicio
  const value = e.target.value
  
  const object = { [dayMonthYear] : value }


  
  writeUserData(ruteDB, object, setUserSuccess)

}

  function handlerEventChange (e) {
    const name = e.target.name
    const value = e.target.value
    const object = {[name]: value}
    setData({...data, ...object})
  }
  function save(e, key) {
    e.preventDefault()

    const monthYear = monthAndYear ? monthAndYear : getMonthAndYear()
    const newDate = new Date()
    if (key == "SavePost") {
      const ruteDB = `${monthYear}/${topic}/Posts` // Nov-2022/Inicio
      const ruteSTG = `${monthYear}` // Nov-2022/
      const fileName = `PostImage_${newDate}` // PostImage_Tue Nov 15 2022 
      const object = { [fileName] : {postDescription: data.PostDescription, PostEnlace: data.PostEnlace, objectFitPost: data.objectPositionPost }}
      uploadIMG(ruteSTG, fileName, postImage, setUserSuccess, monthYear)
      writeUserData(ruteDB, object, setUserSuccess)
    }
    if (key == "SaveBannerTop") {
      const ruteDB = `${monthYear}/${topic}/BannersTop` // Nov-2022/Inicio
      const fileName = `BannerTopImage_${newDate}` // PostImage_Tue Nov 15 2022 
      const object = { [fileName] : {bannerTopWhatsapp: data.bannerTopWhatsapp, PostEnlace: data.bannerTopEnlace, objectFitPost: data.objectPositionBannerTop }}
      //uploadIMG(userDB, postImage, postName, `${monthYear}/${topic}`, setUserSuccess, postsIMG, setUserPostsIMG, monthAndYear)
      writeUserData(ruteDB, object, setUserSuccess)
    }
    if (key == "SaveBannerBottom") {
      const ruteDB = `${monthYear}/${topic}/BannersBottom` // Nov-2022/Inicio
      const fileName = `BannerBottomImage_${newDate}` // PostImage_Tue Nov 15 2022 
      const object = { [fileName] : {bannerBottomWhatsApp: data.bannerBottomWhatsapp, PostEnlace: data.bannerBottomEnlace, objectFitPost: data.objectPositionBannerBottom }}
      //uploadIMG(userDB, postImage, postName, `${monthYear}/${topic}`, setUserSuccess, postsIMG, setUserPostsIMG, monthAndYear)
      writeUserData(ruteDB, object, setUserSuccess)
    }
  }




 
  function handlerUploadFile(e) {
    const monthYear = getMonthAndYear()
    //  uploadIMG(userDB, file, fileName, `${monthYear}/${topic}`, setUserSuccess, postsIMG, setUserPostsIMG, monthAndYear)
  }
  return (
    <div className={style.form}>
      <select className={style.select} name={`${topic}-Template-${dayMonthYear}`} onChange={manageTemplate}>
        <option value="TemplateOne" selected={value == "TemplateOne" ? true : false}>Plantilla 1</option>
        <option value="TemplateThreeA" selected={value == "TemplateThreeA" ? true : false}>Plantilla 2</option>
        <option value="TemplateThreeB" selected={value == "TemplateThreeB" ? true : false}>Plantilla 3</option>
        <option value="TemplateFour" selected={value == "TemplateFour" ? true : false}>Plantilla 4</option>
        <option value="TemplateFive" selected={value == "TemplateFive" ? true : false}>Plantilla 5</option>
        <option value="TemplateSix" selected={value == "TemplateSix" ? true : false}>Plantilla 6</option>
      </select>
      <div className={style.formInputs}>
        <form className={style.formSelectPost}>
          <label htmlFor={`${topic}-Post`} className={style.label} >Seleccionar Post </label>
          <img className={style.previewIMG} src={urlPostImage} alt="" />
          <input type="file" id={`${topic}-Post`} className={style.inputFile} name={`PostImage`} onChange={manageInputIMG} accept="images" />
          <input type="text" placeholder='Descripción' name="PostDescription" onChange={handlerEventChange} />
          <input type="text" placeholder='Enlace' name="PostEnlace" onChange={handlerEventChange} />
          <div className={style.radioInputs}>
            <input type="radio" value="left" name="objectPositionPost" onChange={handlerEventChange} /> ⇦
            <input type="radio" value="top" name="objectPositionPost" onChange={handlerEventChange} /> ⇧
            <input type="radio" value="center" name="objectPositionPost" onChange={handlerEventChange} /> c
            <input type="radio" value="bottom" name="objectPositionPost" onChange={handlerEventChange} /> ⇩
            <input type="radio" value="right" name="objectPositionPost" onChange={handlerEventChange} /> ⇨
          </div>
          <Button style="buttonMiniSecondary" click={(e) => save(e, "SavePost")}>Guardar</Button>
        </form>
        <form className={style.formSelectPost}>
          <label htmlFor={`${topic}-bannerTop`} className={style.label} >Seleccionar Banner Top</label>
          <img className={style.previewIMG} src={urlBannerTopImage} alt="" />
          <input type="file" id={`${topic}-bannerTop`} className={style.inputFile} name={`BannerTopImage`} onChange={manageInputIMG} accept="images" />
          <input type="text" placeholder='Enlace' name="bannerTopEnlace" onChange={handlerEventChange} />
          <input type="text" placeholder='Whatsapp' name="bannerTopWhatsapp" onChange={handlerEventChange} />
          <div className={style.radioInputs}>
            <input type="radio" value="left" name="objectPositionBannerTop" onChange={handlerEventChange} /> ⇦
            <input type="radio" value="top" name="objectPositionBannerTop" onChange={handlerEventChange} /> ⇧
            <input type="radio" value="center" name="objectPositionBannerTop" onChange={handlerEventChange} /> c
            <input type="radio" value="bottom" name="objectPositionBannerTop" onChange={handlerEventChange} /> ⇩
            <input type="radio" value="right" name="objectPositionBannerTop" onChange={handlerEventChange} /> ⇨
          </div>
          <Button style="buttonMiniSecondary" click={(e) => save(e, "SaveBannerTop")}>Guardar</Button>
        </form>
        <form className={style.formSelectPost}>
          <label htmlFor={`${topic}-bannerBottom`} className={style.label} >Seleccionar Banner Bottom </label>
          <img className={style.previewIMG} src={urlBannerBottomImage} alt="" />
          <input type="file" id={`${topic}-bannerBottom`} className={style.inputFile} name={`BannerBottomImage`} onChange={manageInputIMG} accept="images" />
          <input type="text" placeholder='Enlace' name="bannerBottomEnlace" onChange={handlerEventChange} />
          <input type="text" placeholder='Whatsapp' name="bannerBottomWhatsapp" onChange={handlerEventChange} />
          <div className={style.radioInputs}>
            <input type="radio" value="lrft" name="objectPositionBannerBottom" onChange={handlerEventChange} /> ⇦
            <input type="radio" value="top" name="objectPositionBannerBottom" onChange={handlerEventChange} /> ⇧
            <input type="radio" value="center" name="objectPositionBannerBottom" onChange={handlerEventChange} /> c
            <input type="radio" value="bottom" name="objectPositionBannerBottom" onChange={handlerEventChange} /> ⇩
            <input type="radio" value="right" name="objectPositionBannerBottom" onChange={handlerEventChange} /> ⇨
          </div>
          <Button style="buttonMiniSecondary" click={(e) => save(e, "SaveBannerBottom")}>Guardar</Button>
        </form>
      </div>
    </div>


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