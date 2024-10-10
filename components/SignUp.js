import styles from '../styles/Home.module.css';
import Image from 'next/image';

function SignUp () {
    return (
        <div className={styles.signUpContainer}>
            <button className={styles.closeButton}>X</button>
            <div className={styles.logoContainer}>
                <Image src="/logo.png" alt="logo" className={styles.logo} width={100} height={100} />
                <h3 className={styles.h3}>Create your Hackatweet account</h3>
            </div>
            <form className={styles.formulaire}>
                <input className={styles.input} type="text" placeholder="firstname"/>
                <input className={styles.input} type="text" placeholder="username"/>
                <input className={styles.input} type="password" placeholder="password"/>
                <button className={styles.signUpButton} type="submit" >Sign up</button>
            </form>
        </div>
    );
}

export default SignUp;