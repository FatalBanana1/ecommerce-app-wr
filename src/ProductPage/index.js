//import
import { useState } from "react";
import Images from "../Images";
import Sizes from "../Sizes";
import "./ProductPage.css";
import product from "../Data/data.js";

//main
export default function ProductPage() {
	// format price to currency
	const formattedPrice = product.price.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});

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
			<button className="paypal-button">BUY WITH PAYPAL</button>

			<div className="product-deets-header">Product</div>

			<div className="product-deets">{product.productDetails}</div>

			<div>Model</div>

			<div>{product.modelInfo}</div>

			<div>Material</div>
			<div>{product.materialInfo}</div>

			<div>Shipping & Returns</div>

			<div>Size Guide</div>

			<div>Finesse features</div>

			<div>{"You may like... >"}</div>

			<div>Back to Top</div>
		</div>
	);
}
