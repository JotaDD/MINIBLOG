import { useState } from "react"
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	Router,
} from "react-router-dom"
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

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<AuthProvider>
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
