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
import { getDate, getDayMonthYear } from "../utils/Utils";


export default function Section({ topic, publicView }) {

    const { user, userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, monthAndYear, dayMonthYear } = useUser()
 
    console.log(postsIMG)
    return (
        <>
            {userDB[topic] !== null && publicView == false && <Form topic={topic} value={userDB[`${topic}-${date}`]}></Form>}
            {userDB
                && userDB[topic]
                && userDB[topic]['Templates']
                && userDB[topic]['Templates'][userDB[topic]['Templates'][dayMonthYear] ? dayMonthYear : getDayMonthYear()] == "TemplateOne" &&
                <TemplateOne topic={topic}/>}
            {userDB
                && userDB[topic]
                && userDB[topic]['Templates']
                && userDB[topic]['Templates'][userDB[topic]['Templates'][dayMonthYear] ? dayMonthYear : getDayMonthYear()] == "TemplateThreeA" &&
                <TemplateThreeA topic={topic}/>}
            {userDB
                && userDB[topic]
                && userDB[topic]['Templates']
                && userDB[topic]['Templates'][userDB[topic]['Templates'][dayMonthYear] ? dayMonthYear : getDayMonthYear()] == "TemplateThreeB" &&
                <TemplateThreeB topic={topic}/>}
            {userDB
                && userDB[topic]
                && userDB[topic]['Templates']
                && userDB[topic]['Templates'][userDB[topic]['Templates'][dayMonthYear] ? dayMonthYear : getDayMonthYear()] == "TemplateFour" &&
                <TemplateFour topic={topic} />}
            {userDB
                && userDB[topic]
                && userDB[topic]['Templates']
                && userDB[topic]['Templates'][userDB[topic]['Templates'][dayMonthYear] ? dayMonthYear : getDayMonthYear()] == "TemplateFive" &&
                <TemplateFive topic={topic}/>}
            {userDB
                && userDB[topic]
                && userDB[topic]['Templates']
                && userDB[topic]['Templates'][userDB[topic]['Templates'][dayMonthYear] ? dayMonthYear : getDayMonthYear()] == "TemplateSix"
                &&
                <TemplateSix topic={topic}/>}
        </>
    )
}