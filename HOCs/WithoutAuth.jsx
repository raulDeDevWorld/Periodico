import Loader from '../components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context.js'
import { onAuth } from '../firebase/utils'

export function WithoutAuth(Component) {
    return () => {
        const { user, userDB, setUserProfile, setUserData, postsIMG, setUserPostsIMG, setUserDate} = useUser()
        const router = useRouter()
        useEffect(() => {
            onAuth(setUserProfile, setUserData, postsIMG, setUserPostsIMG, setUserDate)
        }, [user]);

        return (
            <>
                {user === undefined && <Loader />}
                {userDB !== "" && postsIMG !== {} && <Component {...arguments} />}
            </>
        )
    }
}
