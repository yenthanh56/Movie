import "swiper/css";
import { lazy, Suspense } from "react";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

import Routes from "./Routes/Routes";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
	return (
		<BrowserRouter>
			<Route
				render={(props) => (
					<>
						<Header {...props} /> <Routes />
						<Suspense
							fallback={<div style={{ display: "none" }}> </div>}
						>
							<Footer />
						</Suspense>{" "}
					</>
				)}
			/>{" "}
		</BrowserRouter>
	);
}

export default App;
