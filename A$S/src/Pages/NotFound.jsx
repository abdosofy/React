import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <section>
            <h1>Page not found.</h1>
            <p>This link isn’t recognized by the app.</p>
            <Link to="/">Return to the home page</Link>
        </section>
    )
}