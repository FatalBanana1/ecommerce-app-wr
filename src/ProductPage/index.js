//import
import { useState } from "react";
import Images from "../Images";
import Sizes from "../Sizes";
import "./ProductPage.css";
import product from "../Data/data.js";
import Reviews from "../Reviews";

//main
export default function ProductPage() {
	// format price to currency
	const formattedPrice = product.price.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});

	// -----------------------
	// states

	const [hideShipping, setHideShipping] = useState(true);
	const [hideDetails, setHideDetails] = useState(true);

	// -----------------------

	// return
	return (
		<div>
			<Images images={product.images} />

			<div className="product-header">
				<div className="product-name">{product.name}</div>
				<div>{formattedPrice}</div>
			</div>

			<Sizes />

			<button className="cart-button">ADD TO CART</button>
			<button className="paypal-button">
				BUY WITH <span className="blue">PAYPAL</span>
			</button>

			<div className="details-container">
				<div
					className="product-deets-header"
					onClick={() => setHideDetails(!hideDetails)}
				>
					Product Details
				</div>

				{hideDetails ? (
					<div
						className="shipping-plus"
						onClick={() => setHideDetails(false)}
					>
						+
					</div>
				) : (
					<div
						className="shipping-minus"
						onClick={() => setHideDetails(true)}
					>
						-
					</div>
				)}
			</div>

			{!hideDetails && (
				<>
					<div className="product-deets">
						{product.productDetails}
					</div>

					<div className="model-header">Model</div>
					<div className="model-info">{product.modelInfo}</div>

					<div className="material-header">Material</div>

					{product.materialInfo.map((material, j) => (
						<div className="material-info" key={j}>
							{`${material}`}
						</div>
					))}
				</>
			)}

			<div className="shipping-container">
				<div
					className="shipping-header"
					onClick={() => setHideShipping(!hideShipping)}
				>
					Shipping & Returns
				</div>

				{hideShipping ? (
					<div
						className="shipping-plus"
						onClick={() => setHideShipping(false)}
					>
						+
					</div>
				) : (
					<div
						className="shipping-minus"
						onClick={() => setHideShipping(true)}
					>
						-
					</div>
				)}
			</div>

			{!hideShipping && (
				<ul className={`shipping-list ${hideShipping ? "hidden" : ""}`}>
					<li>
						This item qualifies for Free Shipping with minimum
						purchase!
					</li>
					<li>
						Returns are accepted within 30 days from purchase date.
					</li>
					<li>Last Act items are final sale and sold “as is.”</li>
					<li>
						No returns, exchanges, or price adjustments allowed.
					</li>
					<li>
						For complete details, read our Shipping and Return
						policies.
					</li>
					<li>Please call customer service for returns.</li>
				</ul>
			)}

			<Reviews />

			<div>YOU MAY ALSO LIKE...</div>
			<div></div>
			<div></div>

			<div>{"You may like... >"}</div>

			<div>Back to Top</div>
		</div>
	);
}
