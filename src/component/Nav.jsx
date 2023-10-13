import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo-bg.png';
import NavClasses from '../styles/Nav.module.css';
import Account from './Account';

export default function Nav() {
    return (
        <nav className={NavClasses.nav}>
            <ul>
                <li>
                    <Link to="/" className={NavClasses.brand}>
                        <img src={logoImage} alt="" />
                        <h3>Learn with sumit</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    );
}
