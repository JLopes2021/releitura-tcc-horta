import '../layouts/Project.css'
import styles from '../layouts/Project.module.css'
import Logo from '../imagens/papel de parede.png'
import Logo1 from '../imagens/ciclo alimentar.png'
import Logo2 from '../imagens/descricao do ciclo alimentar.png'
import Logo3 from '../imagens/cuidados basicos.png'
import Logo4 from '../imagens/descricao dos cuidados.png'
import Logo5 from '../imagens/escolher sementes.png'
import Logo6 from '../imagens/escolher sementes descricao.png'


function Projects() {
    return (
        <div>
            <h1 className={styles.title}>EM CONSTRUÇÃO</h1>
            <img className={styles.logoImg} src={Logo} height={35} alt="Logo" />

            <div class="container-dicas">
                <div class="dicas-comeco">
                    <div class="superior-dicas">
                        Construir uma horta dentro de sua casa também ajuda na sua saúde mental, pois,
                        de acordo com alguns especialistas, ter contato com o solo ajuda em uma menor concentração dos hormônios ligados ao estresse.
                        Ajuda também na influência da diminuição da ansiedade, melhora a qualidade do sono e previne os sintomas da depressão.
                        Fora a qualidade do ar que acaba melhorando também.
                    </div>
                    <div class="meio-dicas">
                        Ter uma horta caseira traz todos esses e outros demais benefícios, contando com que você ainda pode ajudar com o bem-estar
                        do planeta, ajudando a reduzir a utilização de embalagens, contribuí para a diminuição dos gases poluentes na qual seria
                        dos transportes dos alimentos e também ajudará a
                        desestimular o desmatamento, poluição dos rios e dos solos causados pela agricultura intensiva.

                    </div>
                    <div class="inferior-dicas">
                        Ter uma horta em casa ajuda a nos livrar dos agrotóxicos, pois, segundo os dados do Ibama, o Brasil é o
                        país a consumir a maior quantidade de agrotóxicos em números absolutos do planeta Terra.
                        Então desta maneira você estará cuidando da sua saúde e da sua família,
                        levando em consideração de que você vai colher, produzir e consumir na mesma
                        hora um alimento fresco e saudável e repleto de bons nutrientes.

                    </div>

                </div>
            </div>

            <div class="container-fotos">
                <div class="row">
                    <div id="logo1" class="col-sm">
                        <div class="front">
                            <img className={styles.logoImg} src={Logo1} height={35} alt="Logo" />
                        </div>
                        <div class="back">
                            <img className={styles.logoImg} src={Logo2} height={35} alt="Logo" />
                        </div>
                    </div>
                    <div id="logo2" class="col-sm">
                    <div class="front">
                            <img className={styles.logoImg} src={Logo3} height={35} alt="Logo" />
                        </div>
                        <div class="back">
                            <img className={styles.logoImg} src={Logo4} height={35} alt="Logo" />
                        </div>                    </div>
                    <div id="logo3" class="col-sm">
                    <div class="front">
                            <img className={styles.logoImg} src={Logo5} height={35} alt="Logo" />
                        </div>
                        <div class="back">
                            <img className={styles.logoImg} src={Logo6} height={35} alt="Logo" />
                        </div>    
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects
