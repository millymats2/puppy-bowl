import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css"

function NavBar() {
    return (
        <nav className={styles.background}>
            <Link className={styles.text} to="/">Home</Link>
            <Link className={styles.text} to="/NewPlayerForm">Create Puppy</Link>
        </nav>
    )
}

export default NavBar;