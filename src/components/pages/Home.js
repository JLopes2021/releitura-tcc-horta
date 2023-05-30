import '../layouts/Home.css'
import Lista from '../layouts/Lista'
import Logo from '../imagens/logo-mhmv-new.png'
import DLogo from '../imagens/descricao-logo (1).png'
import styles from '../layouts/Home.module.css'


function Home() {
    return (
        <div class="container-home">
            <div class="logo-horta">
                <div class="front">
                    <img className={styles.logoImg} src={Logo} height={35} alt="Logo" />
                </div>
                <div class="back">
                    <img className={styles.logoImg} src={DLogo} height={35} alt="Logo" />
                </div>
            </div>
           
            <div class="descricao-site">
                <p>Ter uma horta em casa ajuda a nos livrar dos agrotóxicos, pois, segundo os dados do Ibama, o Brasil é o
                    país a consumir a maior quantidade de agrotóxicos em números absolutos do planeta Terra.
                    Então desta maneira você estará cuidando da sua saúde e da sua família,
                    levando em consideração de que você vai colher, produzir e consumir na mesma
                    hora um alimento fresco e saudável e repleto de bons nutrientes<details>
                        <summary>Saiba Mais</summary> <p><Lista /></p>

                    </details>  </p>
            </div>
            <div ></div>
        </div>
    )
}

export default Home;

