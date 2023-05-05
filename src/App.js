import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./ProductPage";
import Navbar from "./NavBar";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<ProductPage />
			<Footer />
		</div>
	);
}

export default App;
