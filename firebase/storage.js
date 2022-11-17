import { app } from './config'
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { getDate, getMonthAndYear } from '../utils/Utils'


const storage = getStorage(app)

//--------------------------- Firebase Storage ---------------------------
function uploadIMG(ruteDB, fileName, file, setUserSuccess, monthAndYear) {
    const imagesRef = ref(storage, `/${ruteDB}/${fileName}`);

    uploadBytes(imagesRef, file).then((snapshot) => {
        setUserSuccess("Cargando")
        getList( monthAndYear, postsIMG, setUserPostsIMG,)
    }).catch(e => setUserSuccess('error'));
}


let object = {}
function downloadIMG(fileName, postsIMG, setUserPostsIMG) {

    const imagesRef = ref(storage, `${fileName}`);
    const name = fileName.split('/')[1]
    //console.log(name)
    getDownloadURL(imagesRef)
        .then((url) => {
            //console.log("download")
            object = { ...object, [fileName] :  url }
            setUserPostsIMG(object)
        })
        .catch((error) => {

        });
}



function getList( monthAndYear, postsIMG, setUserPostsIMG, ) {
    console.log(monthAndYear)
    //userDB && userDB[monthAndYear] && Object.keys(userDB[monthAndYear]).map((i, index)=>{

        const listRef = ref(storage, `/${monthAndYear}/`)

        listAll(listRef)
        .then((res) => {
             //console.log(res)
            res.items.forEach((itemRef) => {
                downloadIMG(itemRef["_location"]["path_"], postsIMG, setUserPostsIMG)
            });
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log("error storage")
        });
    //})    
}


{/*async function downloadIMG (ruteSTG, postsIMG, setUserPostsIMG) {
    const imagesRef = ref(storage, ruteSTG);
    const data = await getDownloadURL(imagesRef)
    return data
}
*/}

export { uploadIMG, getList }

