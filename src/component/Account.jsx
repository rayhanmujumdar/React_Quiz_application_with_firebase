import AccountClasses from '../styles/Account.module.css';

export default function Account() {
    console.log(AccountClasses);
    return (
        <div className={AccountClasses.account}>
            <ion-icon name="person-circle-outline" class={AccountClasses.signupIcon} />
            <a href="signup.html">Signup</a>
            {/* <ion-icon name="log-out-outline" class={AccountClasses.logoutIcon} />
            <a href="signup.html">logout</a> */}
        </div>
    );
}
