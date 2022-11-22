import style from '../styles/Modal.module.css'

export default function Error({post, i}) {
    return (
        post == true ?
        <div className={containerEditor}>
            eeditor
        </div> : <div></div>
    )
}