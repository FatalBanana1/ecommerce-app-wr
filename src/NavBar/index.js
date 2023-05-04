//imports
import "./NavBar.css";
import Logo from "./Logo";
import menu from "../Assets/menu.png";
import search from "../Assets/search.png";
import cart from "../Assets/cart.png";

//main
export default function Navbar() {
	// number to show in cart
	let cartNumber = 9;

	// return
	return (
		<nav className="navbar">
			<div className="navbar-left">
				<img className="nav-menu-icon" src={menu} alt="menu" />
				<img className="nav-menu-icon-search" src={search} alt="menu" />
			</div>

			<Logo />

			<div className="navbar-right">
				<img className="cart" src={cart} alt="menu" />
				<div
					className={`cart-number${cartNumber > 99 ? "-3" : cartNumber > 9 ? "-2": "" }`}
				>{`${cartNumber}`}</div>
			</div>
		</nav>
	);
}

// <ul>
// 	<li>
// 		<a href="/">Home</a>
// 	</li>
// 	<li>
// 		<a href="/products">Products</a>
// 	</li>
// 	<li>
// 		<a href="/about">About</a>
// 	</li>
// 	<li>
// 		<a href="/contact">Contact</a>
// 	</li>
// </ul>;
