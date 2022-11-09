import { useUser } from '../context/Context.js'
import styles from '../styles/Plantillas.module.css'

function TemplateEight ({ topic, post1, post2, post3 }) {
    const { postsIMG } = useUser()
    return (
        <section className={styles.section} id={topic}>
            {topic != "inicio" && <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>{topic.toUpperCase()}</h4></div>}
            {postsIMG[`${topic}-bannerTop`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerTop`]} alt="Vercel Logo" />
            </div>}
            <div className={styles.gridOne}>
                <div><img src={post1} /></div>
                <div><img src={post2} /></div>
                <div><img src={post3} /></div>            
            </div>
            {postsIMG[`${topic}-bannerBottom`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerBottom`]} alt="Vercel Logo" />
            </div>}
        </section>
    )
}
export default TemplateEight