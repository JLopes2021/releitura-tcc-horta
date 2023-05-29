import { Link } from "react-router-dom"
import './Lista.css'

function Lista(){
    return(
        <div>
            <ul className="lista">
            <Link to="/projects" > 
            <li className="item-lista">É terapeutico</li>
            </Link> 
            <Link to="/projects" > 
            <li className="item-lista">Preserva o meio ambiente</li>
            </Link> 
            <Link to="/projects" > 
            <li className="item-lista">Decora o meio ambiente</li>
            </Link> 
            <Link to="/projects" > 
            <li className="item-lista">Ajuda na Educação Alimentar</li>
            </Link> 
            </ul>
        </div>
    )
}

export default Lista;