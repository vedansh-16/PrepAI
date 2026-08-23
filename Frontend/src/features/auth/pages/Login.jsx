import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.css"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({email,password})
        navigate('/')
    }

    if(loading){
        return (
            <main>
                <div className="auth-loading-card">
                    <div className="auth-spinner"></div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Loading account...</p>
                </div>
            </main>
        )
    }


    return (
        <main>
            <div className="form-container">
                <div className="form-header">
                    <div className="auth-brand">
                        <h1 className="auth-brand__logo">Prep<span>AI</span></h1>
                    </div>
                    <h1>Welcome back</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" id="email" name='email' placeholder='name@company.com' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            type="password" id="password" name='password' placeholder='Enter your password' />
                    </div>
                    <button className='button primary-button'>Login</button>
                </form>
                <p>Don't have an account? <Link to={"/register"}>Create account</Link></p>
            </div>
        </main>
    )
}

export default Login