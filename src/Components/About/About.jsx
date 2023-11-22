import Image from 'next/image';
import styles from "./About.module.scss";


const About = () => {
  return (
    <section  id ='about' className={styles.about}>
      <Image src="/about.png" alt="sobre nós" width={500} height={400} />
      <div className={styles.content}>
        <h2>Conheça mais sobre o Coffee Space</h2>
        <p>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          sobreviveu não só a cinco séculos, como também ao salto para
        </p>

        <p>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria 
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          sobreviveu não só a cinco séculos, como também ao salto para
        </p>
      </div>
    </section>
  );
};

export default About;
