import style from '../styles/Mantenimiento.module.css'

export default function Mantenimiento(props) {
    return (

        <div className={style.container}>
            
                <video
                    muted
                    autoPlay={"autoplay"}
                    preload="auto"
                    loop
                    className={style.video}>
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            
                <img className={style.img} src="/mantenimiento.png" alt="Mantenimiento" />
            
        </div>
    )
}