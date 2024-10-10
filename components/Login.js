import styles from '../styles/Login.module.css';
import Head from 'next/head';
import Image from 'next/image';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Login() {
    return (
      <div>
        <Head>
          <title>HackaTweet - Login</title>
        </Head>
      
        <div className={styles.homeContainer}>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="logo" className={styles.logo} width={500} height={500} />
          </div>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>See what's happening</h1>
            <h3 className={styles.signUpTitle}>Join Hackatweet today.</h3>
              <button className={styles.buttonSignUp}>Sign up</button>
              <SignUp />
            <h5 className={styles.h5} >Already have an account? </h5>
              <button className={styles.buttonSignIn}>Sign in</button>
              <SignIn />
          </div>
        </div>
      </div>
    );
}

export default Login;