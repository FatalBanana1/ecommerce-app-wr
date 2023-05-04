//import
import Product from "../Product";
import Sizes from "../Sizes";
import "./ProductPage.css";
import { useState } from "react";

//main
export default function ProductPage() {
	// ---------------------

	// product info
	let product = {
		id: 1,
		name: "Sandy Tie Dye Print Dress",
		price: 36,
		image: "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_fbe029d5-ce6f-4a4b-ad03-12de748de70c_1100x.jpg?v=1674955469",
	};

	// product description
	let productDetails = `Angel on earth vibes - look otherworldly in this tie dye printed
				dress 🦋 Having them all trying to figure out where you came
				from… heaven, duh 😇`;

	// product images
	const images = [
		{
			id: 1,
			productId: 1,
			image: "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_fbe029d5-ce6f-4a4b-ad03-12de748de70c_1100x.jpg?v=1674955469",
		},
		{
			id: 2,
			productId: 1,
			image: "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_d92bb309-b1c6-44fc-b0f6-b7a33a90d693_1100x.jpg?v=1674955469",
		},
		{
			id: 3,
			productId: 1,
			image: "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_ead9228a-a716-445a-8905-34caea5b18fa_1100x.jpg?v=1674955469",
		},
		{
			id: 4,
			productId: 1,
			image: "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_86ebb7b3-f1ec-4650-a3db-1983b106db83_1100x.jpg?v=1674955469",
		},
	];

	// -----------------------

	let modelInfo = `Casey is 5'11" and is wearing a size S`;

	let materialInfo = `95% Polyester, 5% Spandex`;

	// -----------------------

	//format price to currency
	const formattedPrice = product.price.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});

	// -----------------------

	// counter

	const [count, setCount] = useState(1);

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const increment = () => {
		if (count < 10) {
			setCount(count + 1);
		}
	};

	// -----------------------

	// return
	return (
		<div>
			<Product images={images} />

			<div className="product-header">
				<div>{product.name}</div>
				<div>Price: {formattedPrice}</div>
			</div>

			<div>
				<Sizes />
			</div>

			<div>
				<button onClick={decrement}>-</button>
				<span>{count}</span>
				<button onClick={increment}>+</button>
			</div>

			{count === 10 && (
				<span>Contact support@finesse.org for greater quantity</span>
			)}

			<button>Add to Cart</button>
			<button>Buy with G Pay</button>

			<div>Product Details</div>

			<div>{productDetails}</div>

			<div>Model</div>

			<div>{modelInfo}</div>

			<div>Material</div>
			<div>{materialInfo}</div>

			<div>Shipping & Returns</div>

			<div>Size Guide</div>


			<div>Finesse features</div>

			<div>{'You may like... >'}</div>

			<div>Back to Top</div>
		</div>
	);
}
