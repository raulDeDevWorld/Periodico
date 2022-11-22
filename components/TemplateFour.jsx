import { useUser } from '../context/Context.js'
import styles from '../styles/Template.module.css'
import { useState } from 'react'
import Banner from './Banner'


function TemplateFour({ topic, post1, post2, post3, post4, description1, description2, description3, description4,
    objectPosition1, objectPosition2, objectPosition3, objectPosition4 }) {
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date } = useUser()

    const [elements, setElements] = useState(false)

    function setPostsElements() {
        setElements(!elements)
    }

    return (
        <section className={styles.section} id={topic}>
            {topic != "Inicio" && <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>{topic.toUpperCase()}</h4></div>}

            {userDB[topic]["BannerTop"] && <Banner ruta={topic} carpeta="BannerTop"></Banner>}  Top

            {topic != "Inicio" && <button className={styles.buttonSeeAll} onClick={setPostsElements}>Ver todo</button> }

            <div className={`${styles.gridFour} ${elements == true && styles.allVisible}`}>
                {postsIMG && postsIMG[topic] && Object.values(postsIMG[topic]).map((i, index) =>
                    <div key={index}>
                        <img src={i} style={{ objectPosition: `${objectPosition1}` }} />
                        {<p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>}
                    </div>
                )}
            </div>

            {userDB[topic]["BannerBottom"] && <Banner ruta={topic} carpeta="BannerBottom"></Banner>}        

        </section>
    )
}
export default TemplateFour