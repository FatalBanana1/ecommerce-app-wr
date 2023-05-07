//import
import { useState } from "react";
import "./Images.css";
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
			<div className="images">
				{product.images.map((image, i) => (
					<img
						key={i}
						src={image}
						alt="product"
						className={`images-icon ${i === imageSelect && "selected-image"}`}
						onClick={() => setImageSelect(i)}
					/>
				))}
			</div>
		</div>
	);
}
