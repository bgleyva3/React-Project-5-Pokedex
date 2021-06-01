import { useAuth } from '../provider/AuthProvider'
import { useHistory } from 'react-router'

const Login = () => {
    const {user, signIn} = useAuth()
    const history = useHistory()

    return(
        <div>
            { user ? <h1>Is Logged</h1> : <h1>It is Not</h1> }
            <button onClick={() => signIn(()=>{history.push("/app")})}>Login</button>
        </div>
    )
}

export default Login