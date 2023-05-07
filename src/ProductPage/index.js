//import
import { useState } from "react";
import Images from "../Images";
import Sizes from "../Sizes";
import "./ProductPage.css";
import product from "../Data/data.js";
import Reviews from "../Reviews";
import YouMayAlsoLike from "../YouMayAlsoLike";

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

			<div className="product-deets">{product.productDetails}</div>

			{!hideDetails && (
				<>
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
					{product.shipping.map((info, k) => (
						<div key={k} className="shipping-info">
							<div className="shipping-details-header">{info[0]}</div>
							{info.map((text, l) => (
								<>
									{l >= 1 && (
										<li key={l} className="shipping-text">
											{text}
										</li>
									)}
								</>
							))}
						</div>
					))}
				</ul>
			)}

			<Reviews />

			<YouMayAlsoLike />

			<div className="back-header">Back to Top</div>
		</div>
	);
}
