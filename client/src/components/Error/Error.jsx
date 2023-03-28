import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.margin}>        
      <h1>
        Without results. We recommend you try a new search.
      </h1>
        <a href="/"> Go back click here</a>
      </div>
    </div>
  );
}
