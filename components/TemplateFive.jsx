import { useUser } from '../context/Context.js'
import styles from '../styles/Template.module.css'

function TemplateFive({ topic, post1, post2, post3, post4, post5, 
    description1, description2, description3, description4, description5,
    objectPosition1, objectPosition2, objectPosition3, objectPosition4, objectPosition5 }) {
        const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date } = useUser()

    return (
        <section className={styles.section} id={topic}>
            {topic != "inicio" && <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>{topic.toUpperCase()}</h4></div>}
            
            {postsIMG[`${topic}-bannerTop-${date}`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerTop-${date}`]} style={{objectPosition: userDB[`${topic}-objectPosition-bannerTop-${date}`]}}  alt="Vercel Logo" />
            </div>} 
            <div className={styles.gridFive}>
                <div>
                    <img src={post1} style={{ objectPosition: `${objectPosition1}` }} />
                    {description1 && <p className={styles.description}>{description1}</p>}
                </div>
                <div>
                    <img src={post2} style={{ objectPosition: `${objectPosition2}` }} />
                    {description2 && <p className={styles.description}>{description2}</p>}
                </div>
                <div>
                    <img src={post3} style={{ objectPosition: `${objectPosition3}` }} />
                    {description3 && <p className={styles.description}>{description3}</p>}
                </div>
                <div>
                    <img src={post4} style={{ objectPosition: `${objectPosition4}` }} />
                    {description4 && <p className={styles.description}>{description4}</p>}
                </div>
                <div>
                    <img src={post5} style={{ objectPosition: `${objectPosition5}` }} />
                    {description5 && <p className={styles.description}>{description5}</p>}
                </div>
            </div>
            {postsIMG[`${topic}-bannerBottom-${date}`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerBottom-${date}`]} style={{objectPosition: userDB[`${topic}-objectPosition-bannerBottom-${date}`]}} alt="Vercel Logo" />
            </div>} 
        </section>
    )
}
export default TemplateFive







