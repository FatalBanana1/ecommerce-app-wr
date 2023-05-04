// imports
import "./Footer.css";

//main
export default function Footer() {
	// returns
	return (
		<div className="footer-container">
			<div className="footer-left">
				<h5>Shop By</h5>
				<div>Tops</div>
				<div>Bottoms</div>
				<div>Outerwear</div>
				<div>Sets</div>
				<div>Accessories</div>
				<div>Dresses</div>
			</div>

			<div className="footer-mid">
				<h5>Follow Us</h5>
				<div>Instagram</div>
				<div>Facebook</div>
				<div>Twitter</div>
				<div>TikTok</div>
				<div>Snapchat</div>
				<div>Youtube</div>
			</div>

			<div className="footer-right">
				<h5>Contact Us</h5>
				<div>rewind@finesse.us</div>
				<div>Exchanges, Refunds, & Returns</div>
				<div>Shipping & Returns</div>
				<div>Terms & Conditions</div>
				<div>Cali Privacy Rights</div>
			</div>
		</div>
	);
}
