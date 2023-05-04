//import
import { useState } from "react";
import "./Product.css";

//main
export default function Product() {
	const images = [
		"https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_fbe029d5-ce6f-4a4b-ad03-12de748de70c_1100x.jpg?v=1674955469",
		"https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_d92bb309-b1c6-44fc-b0f6-b7a33a90d693_1100x.jpg?v=1674955469",
		"https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_ead9228a-a716-445a-8905-34caea5b18fa_1100x.jpg?v=1674955469",
		"https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_86ebb7b3-f1ec-4650-a3db-1983b106db83_1100x.jpg?v=1674955469",
	];

	// select image to display
	const [imageSelect, setImageSelect] = useState(0);
	let image = images[imageSelect];

	// -----------------------

	return (
		<div className="product">
			<img className="product-image" src={image} alt="product" />
		</div>
	);
}
