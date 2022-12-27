// CSS
import styles from "./Home.module.css"

// hooks
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

// components
import Loading from "../../components/Loading"
import PostDetail from "../../components/PostDetail"

const Home = () => {
	const { documents: posts, loading } = useFetchDocuments("posts")
	const navigate = useNavigate()
	const [query, setQuery] = useState("")

	const handleSubmit = (event) => {
		event.preventDefault()

		if (query) {
			return navigate(`/search?q=${query}`)
		}
	}

	const handleQuery = (event) => {
		setQuery(event.target.value)
	}

	return (
		<div className={styles.home}>
			<h1>Veja os nossos posts mais recentes</h1>
			<form className={styles.search_form} onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Ou busque por tags...'
					onChange={handleQuery}
				/>
				<button className='btn btn-dark'>Pesquisar</button>
			</form>
			<div className="post-list">
				{loading && <Loading />}
				{posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
				{posts && posts.length === 0 && (
					<div className={styles.noposts}>
						<p>Não foram encontrados posts</p>
						<Link to='/posts/create' className='btn'>
							Criar primeiro post
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default Home
