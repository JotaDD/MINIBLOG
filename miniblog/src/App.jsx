import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	Router,
} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"

//hooks
import { useState, useEffect } from "react"
import { useAuthentication } from "./hooks/useAuthentication"

import "./App.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

//context
import { AuthProvider } from "./context/AuthContext"

//pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Loading from "./components/Loading"
import CreatePost from "./pages/CreatePost/CreatePost"
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {
	const [user, setUser] = useState(undefined)
	const { auth } = useAuthentication()

	const loadingUser = user == undefined

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user)
		})
	}, [auth])

	if (loadingUser) {
		return <Loading />
	}

	return (
		<div className='App'>
			<AuthProvider value={{ user }}>
				<BrowserRouter>
					<Navbar />
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route
								path='/login'
								element={!user ? <Login /> : <Navigate to='/' />}
							/>
							<Route
								path='/register'
								element={!user ? <Register /> : <Navigate to='/' />}
							/>
							<Route
								path='/posts/create'
								element={user ? <CreatePost /> : <Navigate to='/login' />}
							/>
							<Route
								path='/dashboard'
								element={user ? <Dashboard /> : <Navigate to='/login' />}
							/>
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</div>
	)
}

export default App
