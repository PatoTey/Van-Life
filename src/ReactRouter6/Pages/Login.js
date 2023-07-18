import React, { useState } from "react"
import { useLocation, useNavigate} from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const location = useLocation()
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => {
                localStorage.setItem("loggedin", true)
                const url = location.state?.desired || "/host"
                navigate(url, {replace: true})
            })
            .catch(err =>{
                setError(err.message)
            })
            .finally(()=> {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {location.state?.message && <p className="login-error">{location.state.message}</p>}
            {error && <p className="login-error">{error}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "submitting"}>{status === "submitting" ? "Submitting..." : "Log in"}</button>
            </form>
        </div>
    )

}