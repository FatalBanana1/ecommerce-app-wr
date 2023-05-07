// imports
import { useState } from "react";
import "./YouMayAlsoLike.css";
import product from "../Data/data.js";

// main
export default function () {
	// states
	const [hideReviews, setHideReviews] = useState(true);

	// return
	return (
		<div>
			<div className="shipping-container">
				<div
					className="likes-header"
					onClick={() => setHideReviews(!hideReviews)}
				>
					YOU MAY ALSO LIKE...
				</div>
			</div>

			{product.options.map((option, i) => (
				<div key={i} className="product-option">
					{option.name}
				</div>
			))}
			<div></div>
			<div></div>
		</div>
	);
}
