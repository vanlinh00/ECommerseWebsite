import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvanceHeadling() {
    const { container, headline, containerMiddleBox, title, des } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <div className={headline}>
                    <h1 className={title}>Advance Headling</h1>
                    <div className={des}>
                        Make yours celebrations even more special this years
                        with beautiful.
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeadling;
