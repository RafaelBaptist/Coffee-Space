import Product from "./Product";
import styles from './Products.module.scss';

const Products = () => {
  return (
    <section className={styles.products}>
      <Product
        product="1"
        title="Café blend"
        roast="Torra Escura"
        stars="5"
        reviews="45"
        price="29,90"
      />
       <Product
        product="2"
        title="Café    Branco"
        roast="Torra Clara"
        stars="4"
        reviews="33"
        price="28,00"
      />
       <Product
        product="3"
        title="Café Premium"
        roast="Torra Média"
        stars="5"
        reviews="72"
        price="32,90"
      />
      <Product
        product="4"
        title="Café Latte"
        roast="Torra Clara"
        stars="3"
        reviews="42"
        price="25,90"
      />
      

    </section>
  );
};

export default Products;
