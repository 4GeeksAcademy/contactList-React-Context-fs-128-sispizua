import { Link } from "react-router-dom";
import "../styles/navBar.css"
export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" className="contactTitle">
					<h1 className="navbar-brand mb-0 h1">Contact List</h1>
				</Link>
				<div className="ml-auto">
					<Link to="/add">
						<button className="btn btn-primary">Add new Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};