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
                <Link to="/projects" > Começar Horta </Link> 
            </li>

            <li className={styles.item} >
                <Link to="/contact" > Dicas Úteis </Link> 
            </li>

            <li className={styles.item} >
                <Link to="/company" > Sobre </Link> 
            </li> 
        </ul>
</nav>
)
}
export default Navbar