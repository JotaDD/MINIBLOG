import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

import { useAuthentication } from "../hooks/useAuthentication"
import { useAuthValue } from "../context/AuthContext"

const Navbar = () => {

	const {user} = useAuthValue();

	return (
		<nav className={styles.navbar}>
			<NavLink to='/' className={styles.brand}>
				Mini<span>BLOG</span>
			</NavLink>
			<ul className={styles.links_list}>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? styles.active : "")}
					>
						Home
					</NavLink>
				</li>
				{!user&& (
					<>
					
					</>
				)}
				<li>
					<NavLink
						to='/about'
						className={({ isActive }) => (isActive ? styles.active : "")}
					>
						Sobre
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
