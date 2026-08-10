import styles from './styles.module.scss';
//import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '@components/Button/Button';
function CountdownBanner() {
    const { container, containerTimmer, title, boxBtn } = styles;

    return (
        <div className={container}>
            <p className={title}>The classics make a comeback</p>
        </div>
    );
}
export default CountdownBanner;
