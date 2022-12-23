import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import About from "./pages/About/About"

//pages
import Home from "./pages/Home/Home"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					<Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
          </Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
