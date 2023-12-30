import { useContext, useState, useEffect} from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";

import "./Products.css";

import "./Products.css";

const Products = () => {
	const [data, setData] = useState([]);
	const {buyProducts} = useContext(dataContext);

	useEffect(() => {
		axios("data.json").then((res) => setData(res.data));
	}, []);	
/**
	const buyProducts = (product) => {
		const productrepeat = cart.find((item) => item.id === product.id);

		if (productrepeat) {
			setCart(cart.map((item) => item.id === product.id ? {...product, quanty: productrepeat.
			quanty + 1 } : item));
		} else{
			setCart([...cart, product]);
		}
	};
	**/

	return data.map((product) => {
		return (
			<div className='card' key={product.id}>
				<img src={product.img} alt="img-product-car" />
				<h3>{product.name}</h3>
				<h4>{product.price}$</h4>
				<button onClick={()=> buyProducts(product)}>buy</button>
			</div>
		);
	});
};

export default Products;