import { Link } from "@tanstack/react-router";

export const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-1.5">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};
