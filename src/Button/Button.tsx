import styles from "./Button.module.css";
const Button = () => {
  return (
    <div>
      <button className={styles.btn}>Hover Me</button>
      <div className={styles.devider}></div>

      {/* 
      <button className="btn-2">Hover Me 2</button>
      <div className="devider"></div>
      <button className="btn-3">Hover Me 3</button>
      <div className="devider"></div>
      <button className="btn-4">Hover Me 4</button> */}
    </div>
  );
};

export default Button;
