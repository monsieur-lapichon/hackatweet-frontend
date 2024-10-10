import styles from '../styles/Login.module.css';

function Login() {
    return (
        <div className={styles.homeContainer}>
          <div className={styles.logoContainer}>
            <img src="/logo.png" alt="logo" className={styles.logo}/>
          </div>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>See what's happening</h1>
            <h3 className={styles.signUpTitle}>Join Hackatweet today.</h3>
              <button className={styles.buttonSignUp}>Sign up</button>
            <h5 className={styles.h5} >Already have an account? </h5>
              <button className={styles.buttonSignIn}>Sign in</button>
          </div>
        </div>
      );
}

export default Login;