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
	// modal for sizing chart

	const [modal, setModal] = useState(false);

	// convert size to chart values
	function sizingChart(size) {
		let chart = {
			XS: [`XS`, `0-2`, `33.5"`, `25.5"`, `36.5"`, `32`],
			S: [`S`, `4-6`, `33.5"`, `25.5"`, `36.5"`, `32`],
			M: [`M`, `8-10`, `33.5"`, `25.5"`, `36.5"`, `32`],
			L: [`L`, `12-14`, `33.5"`, `25.5"`, `36.5"`, `32`],
			XL: [`XL`, `14-16`, `33.5"`, `25.5"`, `36.5"`, `32`],
			"1X": [`1X`, `16-18`, `33.5"`, `25.5"`, `36.5"`, `32`],
			"2X": [`2X`, `18-20`, `33.5"`, `25.5"`, `36.5"`, `32`],
			"3X": [`3X`, `20-22`, `33.5"`, `25.5"`, `36.5"`, `32`],
		};
		// return
		return chart[size];
	}

	// ---------------------

	//return
	return (
		<div className="size-selector">
			<div className="size-header-container">
				<div className="size-header">Size</div>
				<div className="size-question" onClick={() => setModal(!modal)}>
					?
				</div>
			</div>

			<div className="size-grid">
				<div className="size-row-one">
					<button
						className={`size-button ${
							selectedSize === "XS" ? "selected-option" : ""
						}`}
						onClick={() => handleSizeClick("XS")}
					>
						XS
					</button>
					<button
						className={`size-button ${
							selectedSize === "S" ? "selected-option" : ""
						}`}
						onClick={() => handleSizeClick("S")}
					>
						S
					</button>
					<button
						className={`size-button ${
							selectedSize === "M" ? "selected-option" : ""
						}`}
						onClick={() => handleSizeClick("M")}
					>
						M
					</button>
					<button
						className={`size-button ${
							selectedSize === "L" ? "selected-option" : ""
						}`}
						onClick={() => handleSizeClick("L")}
					>
						L
					</button>
				</div>

				<div className="size-row-two">
					<button
						className={`size-button ${
							selectedSize === "XL" ? "selected-option" : ""
						}`}
						onClick={() => handleSizeClick("XL")}
					>
						XL
					</button>
					<button
						className={`size-button ${
							selectedSize === "1X" ? "selected-option" : ""
						}`}
						onClick={() => handleSizeClick("1X")}
					>
						1X
					</button>
					<button
						className={`size-button ${
							selectedSize === "2X" ? "selected-option" : ""
						}`}
						onClick={() => handleSizeClick("2X")}
					>
						2X
					</button>
					<button
						className={`size-button ${
							selectedSize === "3X" ? "selected-option" : ""
						}`}
						onClick={() => handleSizeClick("3X")}
					>
						3X
					</button>
				</div>
			</div>

			{selectedSize ? (
				<div className="sizing-container">
					<div className="selected-size">
						<div className="sizes">
							{`Size: ${sizingChart(selectedSize)[0]}`}
						</div>
						<div className="sizes">
							{`US: ${sizingChart(selectedSize)[1]}`}
						</div>
						<div className="sizes">
							{`Bust: ${sizingChart(selectedSize)[2]}`}
						</div>
					</div>

					<div className="selected-size">
						<div className="sizes">
							{`Waist: ${sizingChart(selectedSize)[3]}`}
						</div>
						<div className="sizes">
							{`Hip: ${sizingChart(selectedSize)[4]}`}
						</div>
						<div className="sizes">
							{`Inseam: ${sizingChart(selectedSize)[5]}`}
						</div>
					</div>
				</div>
			) : (
				<div className="selected-size">Select Size Above</div>
			)}
		</div>
	);
}
