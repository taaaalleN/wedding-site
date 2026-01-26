import styles from "./ContactCard.module.css";

const ContactCard = ({ imgUrl = "", altText = "", children }) => {
  return (
    <>
      <img src={imgUrl} alt={altText} class={styles.contact_img} />
      {children}
    </>
  );
};

export default ContactCard;
