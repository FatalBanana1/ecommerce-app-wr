//import
import "./Product.css";

//main
export default function Product({ image }) {
	return (
		<div className="product">
			<img className="product-image" src={image.image} alt={image.name} />
		</div>
	);
}
