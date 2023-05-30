import React from 'react'
import Footer from '../Footer/indexFooter'
import styles from '../Signin/Index.module.css'
import Logo from '../Navbar/Logo/logo-mhmv-new.png'
import {
    Container,
    Icon,
 } from './SigninElements'

const SignIn = () => {
  return (
    <div>
      <Container>
            <Icon to="/"> <img className={styles.logoImg} src={Logo} height={35} alt="Logo" /> </Icon> 
            <h1 className={styles.title}>Página em construção</h1>
            <h2 className={styles.title}>Página em construção</h2>
            <h3 className={styles.title}>Página em construção</h3>
            <h4 className={styles.title}>Página em construção</h4>
            <p className={styles.paragrafo}>
            <div class="descricao-site">
                <p>Ter uma horta em casa ajuda a nos livrar dos agrotóxicos, pois, segundo os dados do Ibama, o Brasil é o
                    país a consumir a maior quantidade de agrotóxicos em números absolutos do planeta Terra.
                    Então desta maneira você estará cuidando da sua saúde e da sua família,
                    levando em consideração de que você vai colher, produzir e consumir na mesma
                    hora um alimento fresco e saudável e repleto de bons nutrientes
               </p>
               <small class="small">É terapeutico, preserva o meio ambiente, decora o ambiente e ajuda na educação alimentar</small>
            </div>
            <div ></div>
            </p>
            <h1 className={styles.title}>Página em construção</h1>
            <h2 className={styles.title}>Página em construção</h2>
            <h3 className={styles.title}>Página em construção</h3>
            <h4 className={styles.title}>Página em construção</h4>
            <Footer/>

    </Container>
    </div>
    
  )
}

export default SignIn