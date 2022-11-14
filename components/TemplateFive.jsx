import { useUser } from '../context/Context.js'
import styles from '../styles/Template.module.css'
import { useState } from 'react'


function TemplateFive({ topic, post1, post2, post3, post4, post5,
    description1, description2, description3, description4, description5,
    objectPosition1, objectPosition2, objectPosition3, objectPosition4, objectPosition5 }) {
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date } = useUser()

    const [elements, setElements] = useState(false)

    function setPostsElements() {
        setElements(!elements)
    }


    return (
        <section className={styles.section} id={topic}>
            {topic != "Inicio" && <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>{topic.toUpperCase()}</h4></div>}

            {postsIMG[`${topic}-bannerTop-${date}`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerTop-${date}`]} style={{ objectPosition: userDB[`${topic}-objectPosition-bannerTop-${date}`] }} alt="Vercel Logo" />
            </div>}

            {topic != "Inicio" && <button className={styles.buttonSeeAll} onClick={setPostsElements}>Ver todo</button>}



            <div className={`${styles.gridFive} ${elements == true && styles.allVisible}`}>
                {postsIMG && postsIMG[topic] && Object.values(postsIMG[topic]).map((i, index) =>
                    <div key={index}>
                        <img src={i} style={{ objectPosition: `${objectPosition1}` }} />
                        {<p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>}
                    </div>
                )}
            </div>
            {postsIMG[`${topic}-bannerBottom-${date}`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerBottom-${date}`]} style={{ objectPosition: userDB[`${topic}-objectPosition-bannerBottom-${date}`] }} alt="Vercel Logo" />
            </div>}
        </section>
    )
}
export default TemplateFive







