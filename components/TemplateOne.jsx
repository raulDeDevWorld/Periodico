import { useUser } from '../context/Context.js'
import styles from '../styles/Template.module.css'
import { useState } from 'react'

function TemplateOne ({ topic, post1, description1, objectPosition1 }) {
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date } = useUser()


    const [elements, setElements] = useState(false)

    
    function setPostsElements() {
        setElements(!elements)
    }




    return (
        <section className={styles.section} id={topic}>
            {topic != "Inicio" && <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>{topic.toUpperCase()}</h4></div>}
            
            
            {postsIMG[`${topic}-bannerTop-${date}`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerTop-${date}`]} style={{objectPosition: userDB[`${topic}-objectPosition-bannerTop-${date}`]}}  alt="Vercel Logo" />
            </div>} 



            {topic != "Inicio" && <button className={styles.buttonSeeAll} onClick={setPostsElements}>Ver todo</button>}



            <div className={styles.gridOne}>
                <div>
                {postsIMG && postsIMG[topic] && Object.values(postsIMG[topic]).map((i, index) =>
                    <div key={index}>
                        <img src={i} style={{ objectPosition: `${objectPosition1}` }} />
                        {description1 && <p className={styles.description}>{description1}</p>}
                    </div>
                )}
                </div>
            </div>
            {postsIMG[`${topic}-bannerBottom-${date}`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerBottom-${date}`]} style={{objectPosition: userDB[`${topic}-objectPosition-bannerBottom-${date}`]}} alt="Vercel Logo" />
            </div>} 
        </section>
    )
}
export default TemplateOne 