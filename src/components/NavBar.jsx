import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/NewPlayerForm">Create Puppy</Link>
        </nav>
    )
}

export default NavBar;