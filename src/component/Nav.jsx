import logoImage from '../assets/images/logo-bg.png';
import NavClasses from '../styles/Nav.module.css';
import Account from './Account';

export default function Nav() {
    return (
        <nav className={NavClasses.nav}>
            <ul>
                <li>
                    <a href="/index.html" className={NavClasses.brand}>
                        <img src={logoImage} alt="" />
                        <h3>Learn with sumit</h3>
                    </a>
                </li>
            </ul>
            <Account />
        </nav>
    );
}
