//import
import "./Product.css";

//main
export default function Product({ product }) {
	return (
		<div className="product">
			<img src={product.image} alt={product.name} />
			<h2>{product.name}</h2>
			<p>Price: ${product.price}</p>
			<button>Add to Cart</button>
		</div>
	);
}
