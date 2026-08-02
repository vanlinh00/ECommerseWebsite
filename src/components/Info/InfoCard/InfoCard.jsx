import styles from '../styles.module.scss';
import TruckIcon from '@icons/svgs/truckIcon.svg';

function InfoCard({ content, description, src }) {
    const { containerCard, containerContent } = styles;

    return (
        <div className={containerCard}>
            <img width={40} height={41} src={src} alt={content} />

            <div className={containerContent}>
                <div>{content}</div>
                <div>{description}</div>
            </div>
        </div>
    );
}

export default InfoCard;
