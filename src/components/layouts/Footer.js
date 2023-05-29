import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './Footers.module.css'

function Footer() {
    return ( <
        footer className = { styles.footer } >
        <
        ul className = { styles.social_list } >
        <
        a className = "linkFooter"
        href = "https://www.instagram.com/_devjeff_/" >
        <
        li >
        <
        FaInstagram / >
        <
        /li> < /
        a >

        <
        a className = "linkFooter"
        href = "https://www.linkedin.com/in/jefferson-lopes-silva/" >
        <
        li >
        <
        FaLinkedin / >
        <
        /li>   <
        /a>

        <
        a href = "https://github.com/JLopes2021" >
        <
        li >
        <
        FaGithub / >
        <
        /li > < /
        a > < /
        ul >

        <
        p className = { styles.copy_right } > < span className = { styles.custos } > Buscador de CEP < /span> &copy; 2023 </p >

        <
        /footer>
    )
}

export default Footer