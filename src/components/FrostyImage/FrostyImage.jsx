import styles from "./FrostyImage.module.css";

const FrostyImage = ({ imgUrl, altText, width = "300px", height = "300px" }) => {
  return (
    <div class={styles.img_wrapper} style={{ width, height }}>
      <p class={styles.img_text}>Some text that is very cool and interesting!</p>
      <img src={imgUrl} alt={altText} class={styles.image} />
    </div>
  );
};

export default FrostyImage;
