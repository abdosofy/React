import { Link } from "react-router-dom";

export default function Navbar(){
    return(
    <header className="Nav-header">
        <Link to="/">A$S</Link>
        <nav>
            <Link to="/">HomePage</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Products?category=accessories">Accessories</Link>
        </nav>
    </header>
    )
}