import styles from './styles.module.scss';

function MyButton() {
    return (
        <div>
            <button className={styles.btn}>Click me</button>
            <button className={styles.btn2}>Click me</button>
        </div>
    );
}

export default MyButton;
