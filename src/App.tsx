import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

function App() {
	return (
		<BrowserRouter>
			<BubblyContainer />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<BubblyLink to="/">Home</BubblyLink>
							<BubblyLink to="/about">About</BubblyLink>
							<BubblyLink to="/contact">Contact</BubblyLink>
							<Outlet />
						</>
					}
				>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<>No Match</>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
