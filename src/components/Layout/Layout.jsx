import styles from './styles.module.scss';
function Layout({ children }) {
    const { wrapLayout, container } = styles;

    return (
        <div className={wrapLayout}>
            <div className={container}>{children}</div>
        </div>
    );
}

export default Layout;
