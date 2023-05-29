import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from '../imagens/logo-mhmv-new.png'

function Navbar() {
    return (<nav className={styles.navbar} >
        <Link to="/" >
            <img src={logo} height={35} alt="Logo" />
        </Link>

        <ul className={styles.list} >
            <li className={styles.item} >
                <Link to="/" > Página Inicial </Link> 
            </li >

            <li className={styles.item} >
                <Link to="/projects" > Faixas de CEP </Link> 
            </li>

            <li className={styles.item} >
                <Link to="/contact" > Em construção </Link> 
            </li>

            <li className={styles.item} >
                <Link to="/company" > Em construção </Link> 
            </li> 
        </ul>
</nav>
)
}
export default Navbar