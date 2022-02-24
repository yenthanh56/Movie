import "swiper";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./Routes/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<BrowserRouter>
			<Route
				render={(props) => (
					<>
						<Header {...props} />

						<Routes />

						<Footer />
					</>
				)}
			/>{" "}
		</BrowserRouter>
	);
}

export default App;
