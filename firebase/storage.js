import { app } from './config'
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { getDate, getMonthAndYear} from '../utils/Utils'


const storage = getStorage(app)

//--------------------------- Firebase Storage ---------------------------
function uploadIMG(userDB, file, fileName, monthAndYearWithTopic, setUserSuccess, postsIMG, setUserPostsIMG, monthAndYear) {
    const imagesRef = ref(storage, `/${monthAndYearWithTopic}/${fileName}_${getDate()}`);

    uploadBytes(imagesRef, file).then((snapshot) => {
        setUserSuccess("Cargando")
        getList(userDB, monthAndYear, postsIMG, setUserPostsIMG,)
    }).catch(e => setUserSuccess('error'));
}

let object = {}
function downloadIMG(fileName, postsIMG, setUserPostsIMG) {

    const imagesRef = ref(storage, `${fileName}`);
    const name = fileName.split('/')[1]
    console.log(name)
    getDownloadURL(imagesRef)
        .then((url) => {
            console.log("download")
            object = { ...object, [name] : {...object[name], [fileName]: url} }
            setUserPostsIMG(object)
        })
        .catch((error) => {

        });
}



function getList(userDB, monthAndYear, postsIMG, setUserPostsIMG, ) {
    console.log(monthAndYear)
    userDB && userDB[monthAndYear] && Object.keys(userDB[monthAndYear]).map((i, index)=>{

        const listRef = ref(storage, `/${monthAndYear}/${i}`)

        listAll(listRef)
        .then((res) => {
            // console.log(res)
            res.items.forEach((itemRef) => {
                downloadIMG(itemRef["_location"]["path_"], postsIMG, setUserPostsIMG)
            });
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log("error storage")
        });
    })    
}




export { uploadIMG, downloadIMG, getList }

