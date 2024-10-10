import styles from '../styles/Home.module.css';

function SignUp () {
    return (
        <div className={styles.signUpContainer}>
            <button className={styles.closeButton}>X</button>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src="/logo.png" alt="logo"/>
                <h3 className={styles.h3}>Create your Hackatweet account</h3>
            </div>
            <form className={styles.formulaire}>
                <input className={styles.input} type="text" placeholder="firstname"/>
                <input className={styles.input} type="text" placeholder="username"/>
                <input className={styles.input} type="text" placeholder="password"/>
                <button className={styles.signUpButton} type="submit" >Sign up</button>
            </form>
        </div>
    );
}

export default SignUp;