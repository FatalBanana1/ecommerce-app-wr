//import
import { useState } from "react";
import "./Product.css";
import product from "../Data/data";

//main
export default function Images() {
	// select image to display
	const [imageSelect, setImageSelect] = useState(0);
	let image = product.images[imageSelect];

	// -----------------------

	return (
		<div className="product">
			<img className="product-image" src={image} alt="product" />
		</div>
	);
}
