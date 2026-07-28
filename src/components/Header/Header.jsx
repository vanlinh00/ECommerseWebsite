import { dataBoxIcon, dataMenu } from './constants';
import BoxIcon from './BoxIcon/BoxIcon';

function MyHeader() {
    return (
        <div>
            <div className={containerBoxIcon}>
                {dataBoxIcon.map(item => {
                    return <BoxIcon type={item.type} href={item.href} />;
                })}
            </div>
        </div>
    );
}
export default MyHeader;
