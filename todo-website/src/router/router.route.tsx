import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Nav } from "../components";
import Footer from "../components/layout/outlet/footer.component";
import LandingPage from "../pages/landingPage.page";

function Layout() {
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [{ path: "/", element: <LandingPage /> }],
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
