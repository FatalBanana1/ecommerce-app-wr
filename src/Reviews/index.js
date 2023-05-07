// imports
import { useState } from "react";
import "./Reviews.css";
import product from "../Data/data.js";
import Stars from "./Stars";

// main
export default function Reviews() {
	// states
	const [hideReviews, setHideReviews] = useState(true);

	// -----------------------

	// return
	return (
		<div className="reviews-container">
			<div className="reviews-header-container">
				<div
					className="reviews-header"
					onClick={() => setHideReviews(!hideReviews)}
				>
					Reviews
				</div>

				{hideReviews ? (
					<div
						className="shipping-plus"
						onClick={() => setHideReviews(false)}
					>
						+
					</div>
				) : (
					<div
						className="shipping-minus"
						onClick={() => setHideReviews(true)}
					>
						-
					</div>
				)}
			</div>

			<div>
				{product.reviews.slice(0, 3).map((review, j) => (
					<div key={j} className="product-review">
						<div className="review-body">
							<Stars quality={review.quality} fit={review.fit} />

							<div className="options-price">
								{review.username}
							</div>

							<div className="options-price">
								{review.details}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
