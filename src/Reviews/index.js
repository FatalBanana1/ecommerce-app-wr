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

	let avgQuality = Math.floor(
		product.reviews.reduce((acc, val) => {
			acc += val.quality;
			return acc;
		}, 0) / product.reviews.length
	);

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

			<>
				{product.reviews.slice(0, 1).map((review, j) => (
					<div
						key={j}
						className="product-review"
						onClick={() => setHideReviews(!hideReviews)}
					>
						<div className="reviews-body-header-average">
							<div className="average-reviews">
								<Stars quality={avgQuality} fit={review.fit} />
								<div className="average-rating">{`${avgQuality} Stars`}</div>
							</div>
							<div className="reviews-username">{`(3 Reviews)`}</div>
						</div>
					</div>
				))}

				<div
					className={`${
						!hideReviews ? "expand-reviews" : "collapse"
					}`}
				>
					{!hideReviews &&
						product.reviews.map((review, j) => (
							<div key={j} className="product-review">
								<div className="review-body">
									<div className="reviews-body-header">
										<Stars
											quality={review.quality}
											fit={review.fit}
										/>
										<div className="reviews-username">
											{review.username}
										</div>
									</div>

									<div className="reviews-details">
										{review.details}
									</div>

									<div className="reviews-date">
										{review.createdAt
											.toLocaleDateString()
											.slice(0, 16)}
									</div>

									{j !== product.reviews.length - 1 ? (
										<div className="reviews-line-break">
											.
										</div>
									) : (
										<div className="reviews-line-break-last">
											.
										</div>
									)}
								</div>
							</div>
						))}
				</div>
			</>
		</div>
	);
}
