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

//pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"

//context
import { AuthProvider } from "./context/AuthContext"
import Loading from "./components/Loading"

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
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</div>
	)
}

export default App
