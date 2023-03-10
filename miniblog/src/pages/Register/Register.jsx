import styles from "./Register.module.css"

import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"
import Loading from "../../components/Loading"

const Register = () => {
	const [displayName, setDisplayName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [error, setError] = useState("")

	const { createUser, error: authError, loading } = useAuthentication()


	const handleSubmit = async (event) => {
		event.preventDefault()

		setError("")

		const user = {
			displayName,
			email,
			password,
		}

		if (password !== confirmPassword) {
			setError("As senhas precisam ser iguais")
			return
		}

		const res = await createUser(user)
		console.log(user)
	}

	useEffect(() => {
		if (authError) {
			setError(authError)
		}
	}, [authError])

	const handleDisplayName = (event) => {
		setDisplayName(event.target.value)
	}
	const handleEmail = (event) => {
		setEmail(event.target.value)
	}
	const handlePassword = (event) => {
		setPassword(event.target.value)
	}
	const handleConfirmPassword = (event) => {
		setConfirmPassword(event.target.value)
	}

	return (
		<div className={styles.register}>
			<h1>Cadastre-se agora!</h1>
			<p>Crie seu usuário e compartilhe suas histórias! </p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Nome:</span>
					<input
						type='text'
						name='displayName'
						required
						placeholder='Nome do usuário'
						value={displayName}
						onChange={handleDisplayName}
					/>
				</label>
				<label>
					<span>Email:</span>
					<input
						type='email'
						name='email'
						required
						placeholder='Email do usuário'
						value={email}
						onChange={handleEmail}
					/>
				</label>
				<label>
					<span>Senha:</span>
					<input
						type='password'
						name='password'
						required
						placeholder='Senha do usuário'
						value={password}
						onChange={handlePassword}
					/>
				</label>
				<label>
					<span>Confirmação de senha:</span>
					<input
						type='password'
						name='passwordConfirm'
						required
						placeholder='Confirme sua senha'
						value={confirmPassword}
						onChange={handleConfirmPassword}
					/>
				</label>
				{!loading && <button className='btn'>Cadastrar</button>}
				{loading && <button className='btn' disabled >Aguarde...</button>}
				{/* {loading && <Loading />} */}
				{error && <p className='error'>{error}</p>}
			</form>
		</div>
	)
}

export default Register
