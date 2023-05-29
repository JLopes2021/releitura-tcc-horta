import '../layouts/Home.css'
import Logo from '../imagens/logo-mhmv-new.png'
import styles from '../layouts/Home.module.css'

function Home() {
    return (
        <div>
            <div class="container">
                <div class="logo-horta">
                    <div class ="front">
                        <img className={styles.logoImg} src={Logo} height={35} alt="Logo" />
                    </div>
                    <div class ="back">
                        <img className={styles.logoImg} src={Logo} height={35} alt="Logo" />
                    </div>
                </div>
                <div class="cabecalho-home-tela">
                    <p>Cabeçalho vai aqui</p>
                </div>
                <div class="descricao-site">
                    <p>Descrição vai aqui</p>
                </div>
            </div>
        </div>
    )
}

export default Home;