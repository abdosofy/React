import { Link } from "react-router-dom";
import {products} from "../data/show.js";

export default function Products() {
return (
<section>
<h1>Products</h1>
<p>Select Products</p>
<ul className="product-list">
{products.map((product) => (
<li key={product.Id}>
<h2>{product.name}</h2>
<p>{(product.price)}</p>
<Link to={`/products/${product.Id}`}> Product details</Link>
</li>
))}
</ul>
</section>
);
}