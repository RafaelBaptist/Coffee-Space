import Image from "next/image";
import styles from "./Details.module.scss";

const Details = () => {
  return (
    <section className={styles.details}>
      <div className={styles.roast}>
        <h2>Tipos de Café</h2>

        <div className={styles.types}>
          <span className={styles.light} />
          <span className={styles.medium} />
          <span className={styles.dark} />
          
        </div>                   
      </div>                     
      <Image src='/coffee2.png' alt="café" width={340} height={225} />
      <div className={styles['card-wrapper']} >
           <div className={styles.card}>
           <h2>Coffee Space</h2>
           <div className={styles.info}>
            <h3>Endereço</h3>
            <h4>Rua exemplo,n 0  / RJ </h4>      
           </div>

           <div className={styles.info}>
            <h3>Funcionamento</h3>
            <h4>
              <span>Segunda a sexta: 9:00 às 18:00</span>
              <span>Sábado 9:00  às 14:00</span>
            </h4>      
           </div>

            </div>

      </div>

    </section>
  );
};

export default Details;
