// imports
import { useState } from "react";
import "./Reviews.css";
import product from "../Data/data.js";

// main
export default function Reviews() {
	// states
	const [hideReviews, setHideReviews] = useState(true);

	// return
	return (
		<div className="reviews-container">
			<div className="reviews-header">Reviews</div>

			<div>
				{product.reviews.slice(0, 3).map((review, j) => (
					<div key={j} className="product-option">
						<div className="option-title">
							<div>{review.quality}</div>
							<div className="options-price">{review.fit}</div>
							<div className="options-price">{review.username}</div>
							<div className="options-price">{review.details}</div>
						</div>
					</div>
				))}
			</div>

			<div></div>
		</div>
	);
}
