import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About/About"

//pages
import Home from "./pages/Home/Home"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<BrowserRouter>
			<Navbar/>
				<div className='container'>
					<Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
          </Routes>
				</div>
				<Footer/>
			</BrowserRouter>
		</div>
	)
}

export default App
