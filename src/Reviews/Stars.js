// imports
import "./Reviews.css";
import star from "../Assets/star.png";
import emptyStar from "../Assets/star-empty.png";

// main
export default function Stars({ quality, fit }) {
	// Quality - create array for stars empty or filled
	let arrayQuality = [0, 0, 0, 0, 0];
	for (let i = 0; i < quality; i++) {
		arrayQuality[i] = 1;
	}

	// Fit - create array for stars empty or filled
	let arrayFit = [0, 0, 0, 0, 0];
	for (let i = 0; i < fit; i++) {
		arrayFit[i] = 1;
	}

	// -----------------------

	// return
	return (
		<div className="stars-container">
			{arrayQuality.map((el, i) => (
				<div key={i} className="stars-row">
					{el === 1 ? (
						<img src={star} alt="star" className="star-icon" />
					) : (
						<img
							src={emptyStar}
							alt="empty-star"
							className="star-icon"
						/>
					)}
				</div>
			))}
		</div>
	);
}
