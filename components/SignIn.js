import ReactDOM from 'react-dom';
import styles from '../styles/SignIn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState } from 'react';

function SignIn () {

    //const user = useSelector((state) => state.user.value);

    const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

    const handleConnection = () => {
        console.log("signInUsername",signInUsername);
        console.log("signInPassword",signInPassword);
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    //dispatch(login({ username: signInUsername, token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                    console.log("login ok");
                    window.location.assign("/");
                }
            });
    };

    return (
        <div className={styles.modalContainer}>
            <div className={styles.closeModal}>
                <FontAwesomeIcon icon={faXmark} />  
            </div>  
            <div className={styles.logoContainer}>
                <Image src="/logo.png" alt="logo" className={styles.logo} width={100} height={100} />
                <h3 className={styles.h3}>Connect to Hackatweet</h3>
            </div>
            <div className={styles.formulaire}>
                <input className={styles.input}  type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                <input className={styles.input} type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                <button className={styles.button} onClick={() => handleConnection()} >Sign in</button>
            </div>

        </div>
    );
}

export default SignIn;