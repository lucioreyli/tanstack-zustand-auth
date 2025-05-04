import { Link } from "@tanstack/react-router";

export const Nav = () => {
	return (
		<nav className="flex justify-between">
			<ul className="flex gap-1.5">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
			<Link to="/login" className="py-1 px-2 border-zinc-200 border shadow">
				Login
			</Link>
		</nav>
	);
};
