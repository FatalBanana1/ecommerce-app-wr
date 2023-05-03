//import
import Product from "../Product";
import "./ProductPage.css";

//main
export default function ProductPage() {
	const products = [
		{
			id: 1,
			name: "Product 1",
			price: 10.99,
			image: "product1.jpg",
		},
		{
			id: 2,
			name: "Product 2",
			price: 19.99,
			image: "product2.jpg",
		},
		// Add more products as needed
	];

	return (
		<div>
			<h1>Product Page</h1>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
}
