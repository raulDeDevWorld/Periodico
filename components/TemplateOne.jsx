import { useUser } from '../context/Context.js'
import styles from '../styles/Template.module.css'
import Banner from './Banner'

import { useState, useEffect } from 'react'

function TemplateOne({ topic, post1, description1, objectPosition1 }) {
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date } = useUser()

    const [elements, setElements] = useState(false)
    const [dataForDate, setDataForDate] = useState([])

    function setPostsElements() {
        setElements(!elements)
    }

    useEffect(() => {
        userDB[topic] && userDB[topic]["Posts"] && setDataForDate(Object.keys(userDB[topic]["Posts"]).map(i => { const newI = i.split('_'); return new Date(newI[1]) }).sort((a, b) => b - a))
    }, [userDB, postsIMG]);


    return (
        <section className={styles.section} id={topic}>
            {topic != "Inicio" && <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>{topic.toUpperCase()}</h4></div>}

            {userDB[topic]["BannerTop"] && <Banner ruta={topic} carpeta="BannerTop"></Banner>}        

            {topic != "Inicio" && <button className={styles.buttonSeeAll} onClick={setPostsElements}>Ver todo</button>}

            <div className={`${styles.gridOne} ${elements == true && styles.allVisible}`}>
                {userDB && dataForDate.length > 0 && dataForDate.map((i, index) =>
                    <div key={index}>
                        <img src={postsIMG[`${topic}/PostImage_${i}`]} style={{ objectPosition: `${objectPosition1}` }} />
                        {<p className={styles.description}>{userDB[topic]["Posts"][`PostImage_${i}`]['postDescription']}</p>}
                    </div>
                )}
            </div>

            {userDB[topic]["BannerBottom"] && <Banner ruta={topic} carpeta="BannerBottom"></Banner>}        


        </section>
    )
}
export default TemplateOne 