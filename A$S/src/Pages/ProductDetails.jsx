import {products} from "../data/show.js";
import { Link , useParams} from "react-router-dom";

export default function ProductDetails(){
    const { productId } = useParams();
    const product = products.find(
    (item) => String(item.Id) === productId
);
return(
    <section>
        <h1>Name:{product.name}</h1>
        <p>Id:{product.Id}</p>
        <p>Price:{product.price}</p>
        <p>Color:{product.color}</p>
        <Link to="/Products">All Products</Link>
    </section>
)
}