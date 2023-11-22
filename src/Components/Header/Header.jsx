import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Coffee Space</h1>
        <div className={styles.line} />
        <p className="dark-bg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque
          dese runt aperiam, iusto laudantium ducimus sint aspernatur molestias
          quisqu am eius nihil culpa velit, magnam suscipit eum, rerum id
          dolore? Dignissimos?
        </p>
        <a href="#about" className="btn btn-primary">Conheça</a >
      </div>

      <Image
        src="/leaf1.png"
        alt="folha"
        width={320}
        height={460}
        className={styles.leaf1 }
        />
      
      <Image
        src='/saco de cafe.png'
        alt="saco de cafe"
        width={450}
        height={350}
        className={styles.bag }
       
       />
      <Image
        src="/leaf2.png"
        alt="folha2"
        width={400}
        height={520}
        className={styles.leaf2 }
        />
      <Image
        src="/coffee.png"
        alt="sementes de cafe"
        width={260}
        height={260}
        className={styles.coffee }
       />
    </header>
  );
};

export default Header;
