import styles from "./CreatePost.module.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useAuthentication } from "../../hooks/useAuthentication"

const CreatePost = () => {
	const [title, setTitle] = useState()
	const [image, setImage] = useState()
	const [body, setBody] = useState()
	const [tags, setTags] = useState()
	const [formError, setFormError] = useState()

	const { loading, error } = useAuthentication()

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	const handleTitle = (event) => {
		setTitle(event.target.value)
	}

	const handleImage = (event) => {
		setImage(event.target.value)
	}

	const handleBody = (event) => {
		setBody(event.target.value)
	}

	const handleTags = (event) => {
		setTags(event.target.value)
	}

	return (
		<div className={styles.create_post}>
			<h2>Criar Post</h2>
			<p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Título:</span>
					<input
						type='text'
						name='title'
						required
						placeholder='Pense em um bom título...'
						onChange={handleTitle}
						value={title}
					/>
				</label>
				<label>
					<span>URL da imagem:</span>
					<input
						type='text'
						name='image'
						required
						placeholder='Insira uma imagem que representa o seu post'
						onChange={handleImage}
						value={image}
					/>
				</label>
				<label>
					<span>Conteúdo</span>
					<textarea
						name='body'
						required
						placeholder='Insira o conteúdo do post'
						onChange={handleBody}
						value={body}
					></textarea>
				</label>
				<label>
					<span>Tags:</span>
					<input
						type='text'
						name='tags'
						required
						placeholder='Insira as tags separadas por vírgula'
						onChange={handleTags}
						value={tags}
					/>
				</label>
				{!loading && <button className='btn'>Postar</button>}
				{loading && (
					<button className='btn' disabled>
						Aguarde...
					</button>
				)}
				{error && <p className='error'>{error}</p>}
			</form>
		</div>
	)
}

export default CreatePost
