import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useUser } from '../context/Context.js'
import { WithoutAuth } from '../HOCs/WithoutAuth'
import Button from '../components/Button'
import Success from '../components/Success'
import Error from '../components/Error'
import Link from 'next/link'
import FormAdds from '../components/FormAdds'
import Modal from '../components/Modal'

import BannerLeft from '../components/BannerLeft'
import BannerRight from '../components/BannerRight'
import BannerPortada from '../components/BannerPortada'

import Section from '../components/Section'
import Date from '../components/Date'
import Header from '../components/Header'

import styles from '../styles/Layout.module.css'
import { handleSignOut } from '../firebase/utils'
import { uploadIMG } from '../firebase/storage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function Layout({ children }) {
    const { userDB, setUserData, monthAndYear, setUserSuccess, success, postsIMG, showImg, date, setUserDate } = useUser()

    const [dataEditor, setDataEditor] = useState(null)


    const router = useRouter()



    function handlerClickEnlace(data) {
        router.pathname != "/Admin" && window.open(data.href, data.target)
        router.pathname == "/Admin" && setDataEditor(data)
        // console.log(data.href, data.target)
    }





    return (

        <div className={styles.container}>
            <div>
                <BannerPortada carpeta="BannerPortada" items={[1,2,3]} click={handlerClickEnlace}></BannerPortada>
            </div>
            <div>
                <BannerLeft carpeta="BannerIzquierdo" items={[1,2,3]} click={handlerClickEnlace}></BannerLeft>
            </div>
            <div>
                <BannerRight carpeta="BannerDerecho" items={[1,2,3]} click={handlerClickEnlace}></BannerRight>
            </div>
            <main>{children}</main>
            {dataEditor && <Modal carpeta={dataEditor.carpeta} item={dataEditor.item} i={dataEditor.i} close={handlerClickEnlace}></Modal>}
        </div>

    )
}

export default Layout


