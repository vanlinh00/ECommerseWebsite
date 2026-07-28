import { dataBoxIcon, dataMenu } from './constants';
import BoxIcon from './BoxIcon/BoxIcon';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';

function MyHeader() {
    const { containerBoxIcon, containerMenu, containerBox, containerHeader } =
        styles;
    return (
        <div className={containerHeader}>
            <div className={containerBox}>
                <div className={containerBoxIcon}>
                    {dataBoxIcon.map(item => {
                        return <BoxIcon type={item.type} href={item.href} />;
                    })}
                </div>
                <div className={containerMenu}>
                    {dataMenu.slice(0, 3).map(item => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
            </div>
        </div>
    );
}
export default MyHeader;
