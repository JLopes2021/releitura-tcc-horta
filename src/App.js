import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Company from './components/pages/Company'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import './App.css'


function App() {
    return ( 
        <div>
                <
        BrowserRouter className = "conteudoGeral" >
        <div>

        </div> <Navbar/>


        <Routes>
        <Route path = "/"
        element = { < Home / > }/>
        <Route path = "/Company" element = {<Company/>}/>
        <Route path = "/Projects" element = {<Projects/>}/>
        <Route path = "/Contact" element = { < Contact / > }/>
        <Route path = "/NewProject" element = {<NewProject/>}/>     
        </Routes >

        </BrowserRouter>
        
        <Footer/>

        </div>
        
    );
}

export
default App