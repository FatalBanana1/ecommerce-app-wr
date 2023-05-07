// imports
import "./Footer.css";

//main
export default function Footer() {
	// returns
	return (
		<div className="footer-container">
			<div className="footer-left">
				<h5>Shop By</h5>
				<div className="footer-small">Tops</div>
				<div className="footer-small">Bottoms</div>
				<div className="footer-small">Outerwear</div>
				<div className="footer-small">Sets</div>
				<div className="footer-small">Accessories</div>
				<div className="footer-small">Dresses</div>
			</div>

			<div className="footer-mid">
				<h5>Follow Us</h5>
				<div className="footer-small">Instagram</div>
				<div className="footer-small">Facebook</div>
				<div className="footer-small">Twitter</div>
				<div className="footer-small">TikTok</div>
				<div className="footer-small">Snapchat</div>
				<div className="footer-small">Youtube</div>
			</div>

			<div className="footer-right">
				<h5>Contact Us</h5>
				<div className="footer-small">rewind@finesse.us</div>
				<div className="footer-small">
					Exchanges, Refunds, & Returns
				</div>
				<div className="footer-small">Shipping & Returns</div>
				<div className="footer-small">Terms & Conditions</div>
				<div className="footer-small">Cali Privacy Rights</div>
			</div>
		</div>
	);
}
