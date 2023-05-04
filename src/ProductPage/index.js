//import
import Product from "../Product";
import "./ProductPage.css";

//main
export default function ProductPage() {
	// product info
	let product = {
		id: 1,
		name: "Sandy Tie Dye Print Dress",
		price: 36,
		image: "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_fbe029d5-ce6f-4a4b-ad03-12de748de70c_1100x.jpg?v=1674955469",
	};

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
	];

	//format price to currency
	const formattedPrice = product.price.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});

	// return
	return (
		<div>
			<h1>Product Page</h1>
			{images.map((image) => (
				<Product key={image.id} image={image} />
			))}

			<h2>{product.name}</h2>
			<p>Price: {formattedPrice}</p>
			<button>Add to Cart</button>
			<button>Buy with G Pay</button>
		</div>
	);
}
