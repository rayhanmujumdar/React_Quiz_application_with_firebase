import layoutClasses from '../styles/Layout.module.css';
import Nav from './Nav';

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <main className={layoutClasses.main}>
                <div className={layoutClasses.container}>{children}</div>
            </main>
        </>
    );
}
