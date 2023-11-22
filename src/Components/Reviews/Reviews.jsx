import styles from "./Reviews.module.scss";
import Stars from "@/UI/Stars";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const reviews = [
  {
    avatar: "/avatar1.png",
    name: "Clara Peres",
    role: "Programadora",
    stars: 5,
    comment: "Excelente serviço!amei!",
  },
  {
    avatar: "/avatar2.png",
    name: "Pedro Alves",
    role: "Estudante",
    stars: 4,
    comment: "Excelente serviço!amei!",
  },
  {
    avatar: "/avatar3.png",
    name: "Renata Souza",
    role: "Engenheira",
    stars: 5,
    comment: "Excelente serviço!amei!",
  },
];

const Reviews = () => {
  const [currentReview , setCurrentReview] =useState(0);

  const nextReview = () =>
    setCurrentReview(
      currentReview === reviews.length - 1 ? 0 : currentReview + 1
    );
  const previousReview = () =>
    setCurrentReview(
      currentReview === 0 ? reviews.length - 1 : currentReview - 1
    );


    // uma açao que a cada 5000 milesimos,5 segundos, vai executar o next review
    useEffect (() =>{
            const interval = setInterval(nextReview, 5000);
            return() => clearInterval(interval);
    }, [currentReview]);

  const { avatar, name, role, stars, comment } = reviews[currentReview];

  return (
    <section id ='reviews' className={styles.reviews}>
      <Image
        className={styles.image}
        src={"/graos.png"}
        alt="graos.png"
        width={425}
        height={250}
      />

      <h2 className="title light-bg">O que falam da gente</h2>
      <div className={styles.review}>
        <button className={styles.previous} onClick={previousReview}>
          &larr;
        </button>
        <Image
          className={styles.avatar}
          src={avatar}
          alt="avatar"
          width={120}
          height={120}
        />
        <h3>{name}</h3>
        <h4>{role}</h4>
        <Stars stars={stars} />
        <p>{comment}</p>

        <button className={styles.next} onClick={nextReview}>
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Reviews;
