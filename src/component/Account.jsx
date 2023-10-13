import { Link } from 'react-router-dom';
import AccountClasses from '../styles/Account.module.css';

export default function Account() {
    return (
        <div className={AccountClasses.account}>
            <ion-icon name="person-circle-outline" class={AccountClasses.signupIcon} />
            <Link to="/signup">Signup</Link>
            {/* <ion-icon name="log-out-outline" class={AccountClasses.logoutIcon} />
            <a href="signup.html">logout</a> */}
        </div>
    );
}
