import { useUser } from '../context/Context.js'
import { useState, useEffect } from 'react'
import { downloadIMG } from '../firebase/storage'
import styles from '../styles/Template.module.css'

function TemplateSix({ topic, post1, post2, post3, post4, post5, post6,
    description1, description2, description3, description4, description5, description6,
    objectPosition1, objectPosition2, objectPosition3, objectPosition4, objectPosition5, objectPosition6 }) {
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, monthAndYear } = useUser()


    const [elements, setElements] = useState(false)
    const [dataForDate, setDataForDate] = useState([])


    function setPostsElements() {
        setElements(!elements)
    }
{/*
    async function getIMG () {
        const data = await downloadIMG('/Nov-2022/Inicio/Posts/PostImage_Wed Nov 16 2022 00:02:28 GMT-0400 (hora de Bolivia)')
        return await data
    }*/}


console.log(userDB)
console.log(Object.keys(postsIMG ))

useEffect(() => {
    setDataForDate(Object.keys(userDB[monthAndYear][topic]["Posts"]).map(i=> {const newI = i.split('_'); return  new Date(newI[1])}).sort((a, b )=> b-a))
},[userDB]);
    return (
        <section className={styles.section} id={topic}>
            {topic != "Inicio" && <div className={styles.containerSubtitle}><h4 className={styles.subtitle}>{topic.toUpperCase()}</h4></div>}         

            {topic != "Inicio" && <button className={styles.buttonSeeAll} onClick={setPostsElements}>Ver todo</button>
            }
            <div className={`${styles.gridSix} ${elements == true && styles.allVisible}`}>
                {userDB&& dataForDate.length > 0  && dataForDate.map((i, index) =>
                    <div key={index}>
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
export default TemplateSix 