import React from 'react'
import styles from '../Signin/Index.module.css'
import Logo from '../Navbar/Logo/logo-mhmv-new.png'
import {
    Container,
    Icon,
 } from './SigninElements'

const SignIn = () => {
  return (
    <Container>
            <Icon to="/"> <img className={styles.logoImg} src={Logo} height={35} alt="Logo" /> </Icon> 
            <h1 className={styles.title}>Página em construção</h1>
            <h2 className={styles.title}>Página em construção</h2>
            <h3 className={styles.title}>Página em construção</h3>
            <h4 className={styles.title}>Página em construção</h4>

    </Container>
  )
}

export default SignIn