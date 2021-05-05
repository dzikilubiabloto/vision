import React, {useState} from "react";

// import {login} from "../../firebase/auth.utils";

import "./login.styles.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";




function Login({login, currentUser, logout}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const history = useHistory();


    const handleSubmit = async (event) => {
        setLoading(true)
        event.preventDefault()
        try{
        await login(email, password)
        } catch(error){
            console.log(error)
        }
        setLoading(false)

    }
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        if(name === "email"){
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }

    const onSubmitLogout = async () => {
        await logout();
    }
    
    return <div>
        <div className="login-button">Login</div>
        <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={email} onChange={handleChange}></input>
            <input type="password" name="password" value={password} onChange={handleChange}></input>
            <button type="submit" disabled={loading}>Login</button>

        </form>
        {currentUser && <button onClick={onSubmitLogout}>Logout</button>}

        </div>
    </div>
}

export default Login;
