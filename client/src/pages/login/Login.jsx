import React, { useState } from 'react'
import "./Login.scss"
import { useNavigate } from "react-router-dom"
import newRequest from "../../utils/newRequest"
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefualt();
        try {
            const res = await newRequest.post("/auth/login", { username, password })
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            navigate("/")
        } catch (error) {
            setError(err.response.data)
        }
    }





    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <label htmlFor="">Username</label>
                <input type="text" name='usernmae' placeholder='johndoe' onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="">Password</label>
                <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
                {error && error}
            </form>
        </div>
    )
}

export default Login