import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import AccountClasses from '../styles/Account.module.css';

export default function Account() {
    const { logout, currentUser } = useAuth();
    let content = null;
    if (currentUser?.uid) {
        content = (
            <button
                type="button"
                className={AccountClasses.logoutBtn}
                onClick={async () => {
                    await logout();
                }}
            >
                <ion-icon name="log-out-outline" class={AccountClasses.logoutIcon} />
                <span>Logout</span>
            </button>
        );
    } else {
        content = (
            <>
                <ion-icon name="person-circle-outline" class={AccountClasses.signupIcon} />
                <Link to="/signup">Signup</Link>
            </>
        );
    }
    return <div className={AccountClasses.account}>{content}</div>;
}
