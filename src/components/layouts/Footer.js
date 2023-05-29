import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Footer.css'
const Footer = () => (
  <footer className="footer">
    <ul className="lista-itens">
        <a className = "linkFooter" href = "https://www.instagram.com/_devjeff_/" >
        <li >
        <FaInstagram/>
        </li> 
        </a>

        <a className = "linkFooter" href = "https://www.linkedin.com/in/jefferson-lopes-silva/" >
        <li>
        <FaLinkedin/>
        </li>   </a>

        <a className = "linkFooter" href = "https://github.com/JLopes2021" >
        <li>
        <FaGithub/>
        </li> 
        </a> 
        </ul>

        <p className="conteudo"> <span className="span"> Buscador de CEP </span> &copy; 2023 </p >

  
  </footer>
);
  
export default Footer;
