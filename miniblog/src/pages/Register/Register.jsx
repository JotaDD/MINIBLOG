import styles from './Register.module.css'

import { useState, useEffect } from 'react'

const Register = () => {


  return (
		<div>
			<h1>Cadastre-se agora!</h1>
      <p>Crie seu usuário e compartilhe suas histórias! </p>
      <form >
        <label>
          <span>Nome:</span>
          <input type="text"  name='displayName' required placeholder='Nome do usuário'/>
        </label>
        <label>
          <span>Email:</span>
          <input type="email"  name='email' required placeholder='Email do usuário'/>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password"  name='password' required placeholder='Senha do usuário'/>
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input type="password"  name='passwordConfirm' required placeholder='Confirme sua senha'/>
        </label>
        <button className='btn'>Cadastrar</button>
        
      </form>
		</div>
	)
}

export default Register