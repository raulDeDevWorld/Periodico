import style from '../styles/Modal.module.css'
import { writeUserData, getData } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useUser } from '../context/Context.js'
import Button from '../components/Button'
import { useState, useEffect } from 'react'
import { getDate, getDayMonthYear, getMonthAndYear } from '../utils/Utils'

export default function Error({ post, i, topic, close }) {
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, monthAndYear, dayMonthYear } = useUser()

    const [data, setData] = useState({})

    const [postImage, setPostImage] = useState(null)
    const [urlPostImage, setUrlPostImage] = useState(null)

    const [bannerTopImage, setBannerTopImage] = useState(null)
    const [urlBannerTopImage, setUrlBannerTopImage] = useState(null)

    const [bannerBottomImage, setBannerBottomImage] = useState(null)
    const [urlBannerBottomImage, setUrlBannerBottomImage] = useState(null)

    //console.log(data)

    console.log(success)

    //console.log(urlPostImage)

    function manageInputIMGSetting(e) {

        ("funcionando")
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

    function handlerEventChange(e) {
        const name = e.target.name
        const value = e.target.value
        const object = { [name]: value }
        setData({ ...data, ...object })
    }








    function handlerEventChange(e) {
        const name = e.target.name
        const value = e.target.value
        const object = { [name]: value }
        setData({ ...data, ...object })
    }








    function saveConfig(e, key) {
        e.preventDefault()

        const monthYear = monthAndYear ? monthAndYear : getMonthAndYear()
        const newDate = new Date()
        if (key == "SavePost") {
            const ruteDB = `/${topic}/Posts` // Nov-2022/Inicio
            const ruteSTG = `${topic}` // Nov-2022/
            const fileName = `PostImage_${i}` // PostImage_Tue Nov 15 2022 
            const object = { [fileName]: { description: data.descriptionPost ? data.descriptionPost : null, enlace: data.enlacePost ? data.enlacePost : `${newDate}`, objectFit: data.objectPositionPost ? data.objectPositionPost : 'center' } }
            writeUserData(ruteDB, object, setUserSuccess, setUserData)
            postImage && uploadIMG(ruteSTG, fileName, postImage, setUserSuccess, monthYear)
        }
        if (key == "SaveBannerTop") {

            const ruteDB = `/${topic}/BannerTop` // Nov-2022/Inicio
            const ruteSTG = `${topic}` // Nov-2022/
            const fileName = i // PostImage_Tue Nov 15 2022 
            const object = { [fileName]: { whatsapp: data.whatsappBannerTop ? data.whatsappBannerTop : null, enlace: data.enlaceBannerTop ? data.enlaceBannerTop : null, objectFit: data.objectPositionBannerTop ? data.objectPositionBannerTop : userDB[topic]["BannerTop"][i].objectFit, dateInit: data.dateInitBannerTop ? data.dateInitBannerTop : userDB[topic]["BannerTop"][i].dateInit, dateFinish: data.dateFinishBannerTop ? data.dateFinishBannerTop : userDB[topic]["BannerTop"][i].dateFinish } }
            writeUserData(ruteDB, object, setUserSuccess, setUserData)
            bannerTopImage && postImage && uploadIMG(ruteSTG, fileName, bannerTopImage, setUserSuccess, monthYear)

        }
        if (key == "SaveBannerBottom") {


            const ruteDB = `/${topic}/BannerBottom` // Nov-2022/Inicio
            const ruteSTG = `${topic}` // Nov-2022/
            const fileName = i // PostImage_Tue Nov 15 2022 
            const object = { [fileName]: { whatsapp: data.whatsappBannerBottom ? data.whatsappBannerBottom : null, enlace: data.enlaceBannerBottom ? data.enlaceBannerBottom : null, objectFit: data.objectPositionBannerBottom ? data.objectPositionBannerBottom : userDB[topic]["BannerBottom"][i].objectFit, dateInit: data.dateInitBannerBottom ? data.dateInitBannerBottom : userDB[topic]["BannerBottom"][i].dateInit, dateFinish: data.dateFinishBannerBottom ? data.dateFinishBannerBottom : userDB[topic]["BannerBottom"][i].dateFinish } }
            writeUserData(ruteDB, object, setUserSuccess, setUserData)
            bannerBottomImage && uploadIMG(ruteSTG, fileName, bannerBottomImage, setUserSuccess, monthYear)


        }
    }

    useEffect(() => {
    })


    return (
        <div className={style.containerEditor}>
            <div className={style.containerForm}>
                <span className={style.close} onClick={() => close(null)}>X</span>
                {post == 'Post' &&
                    <form className={style.formSelectPost}>
                        <label htmlFor={`${topic}-PostConfig`} className={style.label} >Seleccionar Post </label>
                        <img className={style.previewIMG} style={{ objectPosition: `${data.objectPositionPost ? data.objectPositionPost : userDB[topic]["Posts"][`PostImage_${i}`].objectFit} ` }} src={urlPostImage == null ? postsIMG[`${topic}/PostImage_${i}`] : urlPostImage} alt="" />
                        <p className={`${style.require} ${postImage ? style.green : ''}`}>{postImage ? 'Correcto' : '*Requerido'}</p>
                        <input type="file" id={`${topic}-PostConfig`} className={style.inputFile} name={`PostImage`} onChange={manageInputIMGSetting} accept=".jpg, .jpeg, .png, .mp4, webm" />
                        <input type="text" placeholder='Descripción' name="descriptionPost" defaultValue={userDB[topic]["Posts"][`PostImage_${i}`].description} onChange={handlerEventChange} />
                        <input type="text" placeholder='Enlace' name="enlacePost" defaultValue={userDB[topic]["Posts"][`PostImage_${i}`].enlace} onChange={handlerEventChange} />
                        <div className={style.radioInputs}>
                            <input type="radio" value="left" name="objectPositionPost" onChange={handlerEventChange} /> ⇦
                            <input type="radio" value="top" name="objectPositionPost" onChange={handlerEventChange} /> ⇧
                            <input type="radio" value="center" name="objectPositionPost" onChange={handlerEventChange} /> c
                            <input type="radio" value="bottom" name="objectPositionPost" onChange={handlerEventChange} /> ⇩
                            <input type="radio" value="right" name="objectPositionPost" onChange={handlerEventChange} /> ⇨
                        </div>
                        <Button style="buttonMiniSecondary" click={(e) => saveConfig(e, "SavePost")}>Guardar</Button>
                    </form>}

                {post === "BannerTop" && <form className={style.formSelectPost}>
                    <label htmlFor={`${topic}-bannerTopConfig`} className={style.label} >Seleccionar Banner Top</label>
                    <img className={style.previewIMGBanner} style={{ objectPosition: `${data.objectPositionBannerTop ? data.objectPositionBannerTop : userDB[topic]["BannerTop"][i].objectFit} ` }} src={urlBannerTopImage == null ? postsIMG[`${topic}/${i}`] : urlBannerTopImage} alt="" />
                    <p className={`${style.require} ${bannerTopImage ? style.green : ''}`}>{bannerTopImage ? 'Correcto' : '*Requerido'}</p>
                    <input type="file" id={`${topic}-bannerTopConfig`} className={style.inputFile} name={`BannerTopImage`} onChange={manageInputIMGSetting} accept=".jpg, .jpeg, .png, .mp4, webm" />
                    <input type="text" placeholder='Enlace' name="enlaceBannerTop" onChange={handlerEventChange} />
                    <input type="text" placeholder='Whatsapp' name="whatsappBannerTop" onChange={handlerEventChange} />
                    <input className={style.calendario} type="date" id="start" name="dateInitBannerTop" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateInitBannerTop ? style.green : ''}`}>{data.dateInitBannerTop ? 'Correcto' : '*Requerido'}</p>
                    <input className={style.calendario} type="date" id="start" name="dateFinishBannerTop" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateFinishBannerTop ? style.green : ''}`}>{data.dateFinishBannerTop ? 'Correcto' : '*Requerido'}</p>
                    <div className={style.radioInputs}>
                        <input type="radio" value="left" name="objectPositionBannerTop" onChange={handlerEventChange} /> ⇦
                        <input type="radio" value="top" name="objectPositionBannerTop" onChange={handlerEventChange} /> ⇧
                        <input type="radio" value="center" name="objectPositionBannerTop" onChange={handlerEventChange} /> c
                        <input type="radio" value="bottom" name="objectPositionBannerTop" onChange={handlerEventChange} /> ⇩
                        <input type="radio" value="right" name="objectPositionBannerTop" onChange={handlerEventChange} /> ⇨
                    </div>
                    <Button style="buttonMiniSecondary" click={(e) => saveConfig(e, "SaveBannerTop")}>Guardar</Button>
                </form>}

                {post === "BannerBottom" && <form className={style.formSelectPost}>
                    <label htmlFor={`${topic}-bannerBottomConfig`} className={style.label} >Seleccionar Banner Bottom</label>
                    <img className={style.previewIMGBanner} style={{ objectPosition: `${data.objectPositionBannerBottom ? data.objectPositionBannerBottom : userDB[topic]["BannerBottom"][i].objectFit} ` }} src={urlBannerBottomImage == null ? postsIMG[`${topic}/${i}`] : urlBannerBottomImage} alt="" />
                    <p className={`${style.require} ${bannerTopImage ? style.green : ''}`}>{bannerTopImage ? 'Correcto' : '*Requerido'}</p>
                    <input type="file" id={`${topic}-bannerBottomConfig`} className={style.inputFile} name={`BannerBottomImage`} onChange={manageInputIMGSetting} accept=".jpg, .jpeg, .png, .mp4, webm" />
                    <input type="text" placeholder='Enlace' name="enlaceBannerBottom" onChange={handlerEventChange} />
                    <input type="text" placeholder='Whatsapp' name="whatsappBannerBottom" onChange={handlerEventChange} />
                    <input className={style.calendario} type="date" id="start" name="dateInitBannerBottom" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateInitBannerTop ? style.green : ''}`}>{data.dateInitBannerTop ? 'Correcto' : '*Requerido'}</p>
                    <input className={style.calendario} type="date" id="start" name="dateFinishBannerBottom" onChange={handlerEventChange} />
                    <p className={`${style.require} ${data.dateFinishBannerTop ? style.green : ''}`}>{data.dateFinishBannerTop ? 'Correcto' : '*Requerido'}</p>
                    <div className={style.radioInputs}>
                        <input type="radio" value="left" name="objectPositionBannerBottom" onChange={handlerEventChange} /> ⇦
                        <input type="radio" value="top" name="objectPositionBannerBottom" onChange={handlerEventChange} /> ⇧
                        <input type="radio" value="center" name="objectPositionBannerBottom" onChange={handlerEventChange} /> c
                        <input type="radio" value="bottom" name="objectPositionBannerBottom" onChange={handlerEventChange} /> ⇩
                        <input type="radio" value="right" name="objectPositionBannerBottom" onChange={handlerEventChange} /> ⇨
                    </div>
                    <Button style="buttonMiniSecondary" click={(e) => saveConfig(e, "SaveBannerBottom")}>Guardar</Button>
                </form>}
            </div>
        </div>


    )
}