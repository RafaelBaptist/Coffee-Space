import SocialLinks from "@/UI/SocialLinks";
import styles from "./Footer.module.scss";
import Logo from "@/UI/logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column1}>
          <h2>
            <Logo />
          </h2>
          <h3 className="p">
            Desfrute de um café de qualidade enquanto se reconecta com o que é
            essencial
          </h3>
          <SocialLinks />
        </div>
        <div className={styles.column2}>
          <h2 className="p">Faça-nos uma Visita</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30240253.306956034!2d-136.14973343110995!3d-22.29930036199606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1700634214667!5m2!1sen!2sbr"
        
        
            allowfullscreen={true}
            loading="lazy"
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className={styles.column3}>   
        <h2 className="p"> Funcionamento</h2>
         <ul>
          <li>Segunda - Sexta  9:00 às 18:00</li>
          <li>Sabado  9:00 às 17:00</li>
          <li>(00) 00000-0000</li>
          <li>contatoExemplo@exemplo.com.br</li>
         </ul>
         </div>


      </div>
      <span>Space Coffee - Todos os direitos reservados</span>
    </footer>
  );
};

export default Footer;
