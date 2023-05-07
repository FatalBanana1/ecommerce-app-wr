// imports
import { useState } from "react";
import "./YouMayAlsoLike.css";
import product from "../Data/data.js";

// main
export default function () {
	// format price to currency
	const formattedPrice = (price) => {
		return price.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		});
	};

	// -----------------------
	// states
	const [hideReviews, setHideReviews] = useState(true);

	// -----------------------
	// return
	return (
		<div className="options">
			<div className="shipping-container">
				<div
					className="likes-header"
					onClick={() => setHideReviews(!hideReviews)}
				>
					YOU MAY ALSO LIKE...
				</div>
			</div>

			<div className="product-options-container">
				{product.options.slice(0, 3).map((option, i) => (
					<div key={i} className="product-option">
						<img
							id="options-image"
							src={option.image}
							alt="other clothes recommendations"
						/>
						<div className="option-title">
							<div>{option.name}</div>
							<div className="options-price">
								{formattedPrice(option.price)}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="product-options-container">
				{product.options.slice(3, 6).map((option, j) => (
					<div key={j} className="product-option">
						<img
							id="options-image"
							src={option.image}
							alt="other clothes recommendations"
						/>
						<div className="option-title">
							<div>{option.name}</div>
							<div className="options-price">
								{formattedPrice(option.price)}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="product-options-container">
				{product.options.slice(6).map((option, k) => (
					<div key={k} className="product-option">
						<img
							id="options-image"
							src={option.image}
							alt="other clothes recommendations"
						/>
						<div className="option-title">
							<div>{option.name}</div>
							<div className="options-price">
								{formattedPrice(option.price)}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="find-more-options">{`Find More >>>`}</div>
		</div>
	);
}
