import { useUser } from '../context/Context.js'
import styles from '../styles/Template.module.css'

function TemplateOne ({ topic, post1, description1, objectPosition1 }) {
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date } = useUser()
    return (
        <section className={styles.section} id={topic}>
            {topic != "inicio" && <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>{topic.toUpperCase()}</h4></div>}
            
            
            {postsIMG[`${topic}-bannerTop-${date}`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerTop-${date}`]} style={{objectPosition: userDB[`${topic}-objectPosition-bannerTop-${date}`]}}  alt="Vercel Logo" />
            </div>} 
            <div className={styles.gridOne}>
                <div>
                <div>
                    <img src={post1} style={{objectPosition: `${objectPosition1}`}}/>
                    {description1 && <p className={styles.description}>{description1}</p>}
                </div>
                </div>
            </div>
            {postsIMG[`${topic}-bannerBottom-${date}`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerBottom-${date}`]} style={{objectPosition: userDB[`${topic}-objectPosition-bannerBottom-${date}`]}} alt="Vercel Logo" />
            </div>} 
        </section>
    )
}
export default TemplateOne 