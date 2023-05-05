//imports
import { useState } from "react";
import "./Sizes.css";

//main
export default function Sizes() {
	// states
	// select size
	const [selectedSize, setSelectedSize] = useState("");

	// handlers
	// select size handler
	const handleSizeClick = (size) => {
		setSelectedSize(size);
	};

	// ---------------------

	//return
	return (
		<div className="size-selector">
			<div className="size-header">Size</div>

			<div className="size-grid">
				<div className="size-row-one">
					<button
						className={`size-button ${
							selectedSize === "XS" ? "selected" : ""
						}`}
						onClick={() => handleSizeClick("XS")}
					>
						XS
					</button>
					<button
						className={`size-button ${
							selectedSize === "S" ? "selected" : ""
						}`}
						onClick={() => handleSizeClick("S")}
					>
						S
					</button>
					<button
						className={`size-button ${
							selectedSize === "M" ? "selected" : ""
						}`}
						onClick={() => handleSizeClick("M")}
					>
						M
					</button>
					<button
						className={`size-button ${
							selectedSize === "L" ? "selected" : ""
						}`}
						onClick={() => handleSizeClick("L")}
					>
						L
					</button>
				</div>

				<div className="size-row-two">
					<button
						className={`size-button ${
							selectedSize === "XL" ? "selected" : ""
						}`}
						onClick={() => handleSizeClick("XL")}
					>
						XL
					</button>
					<button
						className={`size-button ${
							selectedSize === "1X" ? "selected" : ""
						}`}
						onClick={() => handleSizeClick("1X")}
					>
						1X
					</button>
					<button
						className={`size-button ${
							selectedSize === "2X" ? "selected" : ""
						}`}
						onClick={() => handleSizeClick("2X")}
					>
						2X
					</button>
					<button
						className={`size-button ${
							selectedSize === "3X" ? "selected" : ""
						}`}
						onClick={() => handleSizeClick("3X")}
					>
						3X
					</button>
				</div>
			</div>

			{selectedSize ? (
				<div className="selected-size">
					Selected Size: {selectedSize}
				</div>
			) : (
				<div className="selected-size">Select Size Above</div>
			)}
		</div>
	);
}
