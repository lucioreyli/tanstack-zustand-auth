import { Nav } from "@/components/nav";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({ component: RootComponent });

function RootComponent() {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
}
