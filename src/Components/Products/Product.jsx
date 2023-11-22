import styles from "./Product.module.scss";
import Image from "next/image";
import Stars from '../../UI/Stars'

const Product = ({ product, title,roast,stars ,reviews, price}) => {
  
  return (
    <section id ='products'  className={styles.product}>
      <Image
        src={`/product${product}.png`}
        alt={`produto ${product}`}
        width={200}
        height={300}
      />
      <h2>{title}</h2>
      <h3>{roast}</h3>
     <Stars stars={stars} reviews={reviews}/>
      <h4>R$ {price}</h4>
    </section>
  ); 
};

export default Product;
