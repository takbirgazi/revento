import styles from "@/assets/styles/contestButton.module.css";

const ContestButton = () => {
    return (
        <div className={styles.container}>
            <a className={styles.btn} href="https://contest.motionmark.agency" target="_blank">
                <span className={styles.btnInner}>Contest</span>
            </a>
        </div>
    );
};

export default ContestButton;