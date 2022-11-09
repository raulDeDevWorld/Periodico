import { useUser } from '../context/Context'
import TemplateOne from './TemplateOne'
import TemplateThreeA from './TemplateThreeA'
import TemplateThreeB from './TemplateThreeB'
import TemplateFour from './TemplateFour'
import TemplateFive from './TemplateFive'
import TemplateSix from './TemplateSix'
import PostTwo from './PostTwo'
import PostThree from './PostThree'
import Form from './Form'
import { getDate } from "../utils/Utils";


export default function Section({ topic, publicView }) {

    const { user, userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date } = useUser()

    console.log(date)
    
    return (
        <>
            {userDB[topic] !== null && publicView == false && <Form topic={topic} value={userDB[`${topic}-${date}`]}></Form>}
            {userDB[`${topic}-${date}`] == "TemplateOne" &&
                <TemplateOne topic={topic}
                    post1={`${postsIMG[`${topic}-Post1-${date}`] && postsIMG[`${topic}-Post1-${date}`]}`}
                    description1={userDB[`${topic}-Descripcion-Post1-${date}`]}
                    objectPosition1={userDB[`${topic}-objectPosition-Post1-${date}`]}
                    />}
         
                  {userDB[`${topic}-${date}`] == "TemplateThreeA" &&
                <TemplateThreeA topic={topic}
                    post1={`${postsIMG[`${topic}-Post1-${date}`] && postsIMG[`${topic}-Post1-${date}`]}`}
                    post2={`${postsIMG[`${topic}-Post2-${date}`] && postsIMG[`${topic}-Post2-${date}`]}`}
                    post3={`${postsIMG[`${topic}-Post3-${date}`] && postsIMG[`${topic}-Post3-${date}`]}`}
                    description1={userDB[`${topic}-Descripcion-Post1-${date}`]}
                    description2={userDB[`${topic}-Descripcion-Post2-${date}`]}
                    description3={userDB[`${topic}-Descripcion-Post3-${date}`]}
                    objectPosition1={userDB[`${topic}-objectPosition-Post1-${date}`]}
                    objectPosition2={userDB[`${topic}-objectPosition-Post2-${date}`]}
                    objectPosition3={userDB[`${topic}-objectPosition-Post3-${date}`]}
                    />}
                 {userDB[`${topic}-${date}`] == "TemplateThreeB" &&
                <TemplateThreeB topic={topic}
                    post1={`${postsIMG[`${topic}-Post1-${date}`] && postsIMG[`${topic}-Post1-${date}`]}`}
                    post2={`${postsIMG[`${topic}-Post2-${date}`] && postsIMG[`${topic}-Post2-${date}`]}`}
                    post3={`${postsIMG[`${topic}-Post3-${date}`] && postsIMG[`${topic}-Post3-${date}`]}`}
                    description1={userDB[`${topic}-Descripcion-Post1-${date}`]}
                    description2={userDB[`${topic}-Descripcion-Post2-${date}`]}
                    description3={userDB[`${topic}-Descripcion-Post3-${date}`]}
                    objectPosition1={userDB[`${topic}-objectPosition-Post1-${date}`]}
                    objectPosition2={userDB[`${topic}-objectPosition-Post2-${date}`]}
                    objectPosition3={userDB[`${topic}-objectPosition-Post3-${date}`]}
                    />}
            {userDB[`${topic}-${date}`] == "TemplateFour" &&
                <TemplateFour topic={topic}
                    post1={`${postsIMG[`${topic}-Post1-${date}`] && postsIMG[`${topic}-Post1-${date}`]}`}
                    post2={`${postsIMG[`${topic}-Post2-${date}`] && postsIMG[`${topic}-Post2-${date}`]}`}
                    post3={`${postsIMG[`${topic}-Post3-${date}`] && postsIMG[`${topic}-Post3-${date}`]}`}
                    post4={`${postsIMG[`${topic}-Post4-${date}`] && postsIMG[`${topic}-Post4-${date}`]}`}
                    post5={`${postsIMG[`${topic}-Post5-${date}`] && postsIMG[`${topic}-Post5-${date}`]}`}
                    description1={userDB[`${topic}-Descripcion-Post1-${date}`]}
                    description2={userDB[`${topic}-Descripcion-Post2-${date}`]}
                    description3={userDB[`${topic}-Descripcion-Post3-${date}`]}
                    description4={userDB[`${topic}-Descripcion-Post4-${date}`]}
                    objectPosition1={userDB[`${topic}-objectPosition-Post1-${date}`]}
                    objectPosition2={userDB[`${topic}-objectPosition-Post2-${date}`]}
                    objectPosition3={userDB[`${topic}-objectPosition-Post3-${date}`]}
                    objectPosition4={userDB[`${topic}-objectPosition-Post4-${date}`]}
                />}
            {userDB[`${topic}-${date}`] == "TemplateFive" &&
                <TemplateFive topic={topic}
                    post1={`${postsIMG[`${topic}-Post1-${date}`] && postsIMG[`${topic}-Post1-${date}`]}`}
                    post2={`${postsIMG[`${topic}-Post2-${date}`] && postsIMG[`${topic}-Post2-${date}`]}`}
                    post3={`${postsIMG[`${topic}-Post3-${date}`] && postsIMG[`${topic}-Post3-${date}`]}`}
                    post4={`${postsIMG[`${topic}-Post4-${date}`] && postsIMG[`${topic}-Post4-${date}`]}`}
                    post5={`${postsIMG[`${topic}-Post5-${date}`] && postsIMG[`${topic}-Post5-${date}`]}`}
                    description1={userDB[`${topic}-Descripcion-Post1-${date}`]}
                    description2={userDB[`${topic}-Descripcion-Post2-${date}`]}
                    description3={userDB[`${topic}-Descripcion-Post3-${date}`]}
                    description4={userDB[`${topic}-Descripcion-Post4-${date}`]}
                    description5={userDB[`${topic}-Descripcion-Post5-${date}`]}
                    objectPosition1={userDB[`${topic}-objectPosition-Post1-${date}`]}
                    objectPosition2={userDB[`${topic}-objectPosition-Post2-${date}`]}
                    objectPosition3={userDB[`${topic}-objectPosition-Post3-${date}`]}
                    objectPosition4={userDB[`${topic}-objectPosition-Post4-${date}`]}
                    objectPosition5={userDB[`${topic}-objectPosition-Post5-${date}`]}
                />}

            {userDB[`${topic}-${date}`] == "TemplateSix" &&
                <TemplateSix topic={topic}
                    post1={`${postsIMG[`${topic}-Post1-${date}`] && postsIMG[`${topic}-Post1-${date}`]}`}
                    post2={`${postsIMG[`${topic}-Post2-${date}`] && postsIMG[`${topic}-Post2-${date}`]}`}
                    post3={`${postsIMG[`${topic}-Post3-${date}`] && postsIMG[`${topic}-Post3-${date}`]}`}
                    post4={`${postsIMG[`${topic}-Post4-${date}`] && postsIMG[`${topic}-Post4-${date}`]}`}
                    post5={`${postsIMG[`${topic}-Post5-${date}`] && postsIMG[`${topic}-Post5-${date}`]}`}
                    post6={`${postsIMG[`${topic}-Post6-${date}`] && postsIMG[`${topic}-Post6-${date}`]}`}
                    description1={userDB[`${topic}-Descripcion-Post1-${date}`]}
                    description2={userDB[`${topic}-Descripcion-Post2-${date}`]}
                    description3={userDB[`${topic}-Descripcion-Post3-${date}`]}
                    description4={userDB[`${topic}-Descripcion-Post4-${date}`]}
                    description5={userDB[`${topic}-Descripcion-Post5-${date}`]}
                    description6={userDB[`${topic}-Descripcion-Post6-${date}`]}
                    objectPosition1={userDB[`${topic}-objectPosition-Post1-${date}`]}
                    objectPosition2={userDB[`${topic}-objectPosition-Post2-${date}`]}
                    objectPosition3={userDB[`${topic}-objectPosition-Post3-${date}`]}
                    objectPosition4={userDB[`${topic}-objectPosition-Post4-${date}`]}
                    objectPosition5={userDB[`${topic}-objectPosition-Post5-${date}`]}
                    objectPosition6={userDB[`${topic}-objectPosition-Post6-${date}`]}
                />}
        </>
    )
}