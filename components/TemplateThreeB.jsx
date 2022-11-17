import { useUser } from '../context/Context.js'
import styles from '../styles/Template.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'



function TemplateThreeB({ topic, post1, post2, post3, description1, description2, description3, objectPosition1, objectPosition2, objectPosition3 }) {
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, monthAndYear } = useUser()
    const [dataForDate, setDataForDate] = useState([])
    const router = useRouter()

    const [elements, setElements] = useState(false)

    function setPostsElements() {
        setElements(!elements)
    }
    function handlerRedirection(rute) {
       // console.log(rute)
       router.push(rute)
   }
    useEffect(() => {
        setDataForDate(Object.keys(userDB[monthAndYear][topic]["Posts"]).map(i=> {const newI = i.split('_'); return  new Date(newI[1])}).sort((a, b )=> b-a))
    },[userDB]);
    return (
        <section className={styles.section} id={topic}>
            {topic != "Inicio" && <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>{topic.toUpperCase()}</h4></div>}

            {postsIMG[`${topic}-bannerTop-${date}`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerTop-${date}`]} style={{ objectPosition: userDB[`${topic}-objectPosition-bannerTop-${date}`] }} alt="Vercel Logo" />
            </div>}
            {topic != "Inicio" && <button className={styles.buttonSeeAll} onClick={setPostsElements}>Ver todo</button>}
            <div className={`${styles.gridThreeB} ${elements == true && styles.allVisible}`}>
                {userDB && dataForDate.length > 0 && dataForDate.map((i, index) =>
                    <div key={index} onClick={()=>handlerRedirection(userDB[monthAndYear][topic]["Posts"][`PostImage_${i}`]['PostEnlace'])}>
                        <img src={postsIMG && postsIMG[`${monthAndYear}/PostImage_${i}`]} style={{ objectPosition: `${objectPosition1}` }} />
                        {<p className={styles.description}>{userDB[monthAndYear][topic]["Posts"][`PostImage_${i}`]['postDescription']}</p>}
                    </div>
                )}
            </div>



            {postsIMG[`${topic}-bannerBottom-${date}`] && <div className={styles.banner}>
                <img src={postsIMG[`${topic}-bannerBottom-${date}`]} style={{ objectPosition: userDB[`${topic}-objectPosition-bannerBottom-${date}`] }} alt="Vercel Logo" />
            </div>}
        </section>
    )
}
export default TemplateThreeB