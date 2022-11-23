import { useUser } from '../context/Context.js'
import { useState, useEffect } from 'react'
import Banner from './Banner'
import Modal from './Modal'
import { downloadIMG } from '../firebase/storage'
import styles from '../styles/Template.module.css'
import { useRouter } from 'next/router'



function TemplateFive({ topic, post1, post2, post3, post4, post5,
    description1, description2, description3, description4, description5,
    objectPosition1, objectPosition2, objectPosition3, objectPosition4, objectPosition5 }) {
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, monthAndYear } = useUser()
    const router = useRouter()
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']


    const [elements, setElements] = useState(false)
    const [dataForDate, setDataForDate] = useState([])
    const [dataEditor, setDataEditor] = useState(null)

    function setPostsElements() {
        setElements(!elements)
    }

    function handlerClickEnlace(info) {
        router.pathname != "/Admin" && info.i !== undefined && router.push("/" + userDB[topic]["Posts"][`PostImage_${info.i}`])
        router.pathname == "/Admin" && setDataEditor(info)
    }

    useEffect(() => {
        userDB[topic] && userDB[topic]["Posts"] && setDataForDate(Object.keys(userDB[topic]["Posts"]).map(i => { const newI = i.split('_'); return new Date(newI[1]) }).sort((a, b) => b - a))
    }, [userDB, postsIMG]);
    return (
        <section className={styles.section} id={topic}>
            {topic != "Inicio" && <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>{topic.toUpperCase()}</h4></div>}

            {userDB[topic]["BannerTop"] && <Banner ruta={topic} carpeta="BannerTop" click={handlerClickEnlace}></Banner>}


            {topic != "Inicio" && <button className={styles.buttonSeeAll} onClick={setPostsElements}>Ver todo</button>}

            <div className={`${styles.gridFive} ${elements == true && styles.allVisible}`}>
                {userDB && dataForDate.length > 0 && dataForDate.map((i, index) =>
                    <div key={index} onClick={() => handlerClickEnlace({ i, key: 'Post' })}>
                        {userDB[topic]["Posts"][`PostImage_${i}`]['content'] ? '' : <span className={styles.inDevelop}>En desarrollo...</span>}
                        {router.pathname == "/Admin" && <span className={styles.datePost}>{`${i.getDate()}-${months[i.getMonth()]} ${i.getHours()}:${i.getMinutes()}`}</span>}
                        <img src={postsIMG[`${topic}/PostImage_${i}`]} style={{ objectPosition: `${userDB[topic]["Posts"][`PostImage_${i}`]['objectFit']}` }} />
                        {userDB[topic]["Posts"][`PostImage_${i}`]['description'] && <p className={styles.description}>{userDB[topic]["Posts"][`PostImage_${i}`]['description']}</p>}
                    </div>
                )}
            </div>
            {userDB[topic]["BannerBottom"] && <Banner ruta={topic} carpeta="BannerBottom"></Banner>}
            {dataEditor && <Modal post={dataEditor.key} topic={topic} i={dataEditor.i} close={handlerClickEnlace}></Modal>}

        </section>
    )
}
export default TemplateFive







