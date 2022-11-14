import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useUser } from '../context/Context.js'
import { WithAuth } from '../HOCs/WithAuth'
import Button from '../components/Button'
import Success from '../components/Success'
import Section from '../components/Section'
import Date from '../components/Date'

import { handleSignOut } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import styles from '../styles/TemplatePage.module.css'

function TemplateOne() {
    const [textArea, setTextArea] = useState("");
    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date } = useUser()
    const [arr, setArr] = useState([])

    function handlerChange(e) {
        setTextArea(e.target.value)
    }
    function add(e) {
        setArr([...arr, arr.length])
    }

    return (
        <div className={styles.container}>




<div className={styles.containerItems}>
                <button onClick={add} >Agregar elemento</button>
                
                {arr.map((i, index) => {
                    return (
                        <div className={styles.items}>
                            <select className={styles.select} name={"select"}>
                                <option value="Text" >Texto</option>
                                <option value="Img" >Imagen</option>
                                <option value="Video" >Video</option>
                            </select>
                            <button className={styles.button}>-</button>
                        </div>
                    )
                })}
                </div>





            <main className={styles.main}>
                <Navbar></Navbar>
                <label htmlFor="text">text</label>
                
                <p className={styles.paragraph}>{textArea}</p>
                <textarea className={styles.textArea} name="paragraph" id="text" cols="30" rows="10" onChange={handlerChange}></textarea>
            </main>
        </div>
    )
}
export default TemplateOne 