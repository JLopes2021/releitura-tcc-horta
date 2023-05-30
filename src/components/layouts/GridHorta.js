import styles from '../layouts/GridHorta.module.css';


function GridHorta() {
    return (
        <div className={styles.container}>
            <div className={styles.grid_dicas}>
                <div className={styles.cuidado_basico}></div>
                <div className={styles.ciclo}></div>
                <div className={styles.escolhas}></div>
            </div>
        </div>
    )
} export default GridHorta;