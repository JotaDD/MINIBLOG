import styles from "./Login.module.css"

import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"
import Loading from "../../components/Loading"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")

	const { error: authError, loading, login } = useAuthentication()

	const handleSubmit = async (event) => {
		event.preventDefault()

		setError("")

		const user = {
			email,
			password,
		}
		const res = await login(user)
		console.log(res)
	}
	useEffect(() => {
		console.log(authError)
		if (authError) {
			setError(authError)
		}
	}, [authError])

	const handleEmail = (event) => {
		setEmail(event.target.value)
	}
	const handlePassword = (event) => {
		setPassword(event.target.value)
	}

	return (
		<div className={styles.login}>
			<h1>Entrar</h1>
			<p>Faça o login para poder utilizar o Blog</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Login:</span>
					<input
						type='email'
						name='login'
						autoComplete="email"
						required
						placeholder='Digite seu email'
						onChange={handleEmail}
						value={email}
					/>
				</label>
				<label>
					<span>Senha:</span>
					<input
						type='password'
						name='password'
						autoComplete='current-password'
						required
						onChange={handlePassword}
						value={password}
					/>
				</label>
				{!loading && (
					<button className='btn'>
						Entrar
					</button>
				)}
				{loading && <Loading/>}
				{error&& <p className="error">{error}</p>}
			</form>
		</div>
	)
}

export default Login
