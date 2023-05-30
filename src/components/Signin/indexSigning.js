import React from 'react'
import styles from '../Navbar/Navbar.module.css'
import Navbar from '../Navbar/index'
import Logo from '../Navbar/Logo/logo-mhmv-new.png'
import {
    Container,
    Icon,
 } from './SigninElements'

const SignIn = () => {
  return (
    <Container>
        <Navbar></Navbar>
            <Icon to="/"> <img className={styles.logoImg} src={Logo} height={35} alt="Logo" /> </Icon> 

    </Container>
  )
}

export default SignIn