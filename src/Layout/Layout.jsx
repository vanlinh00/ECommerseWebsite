import styles from './styles.modules.scss';

function Layout({ children }) {
    const { wrapLayout, container } = styles;

    return (
        <div className={wrapLayout}>
            <div className={container}>{children}</div>
        </div>
    );
}
