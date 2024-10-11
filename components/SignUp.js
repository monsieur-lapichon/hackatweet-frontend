import styles from "../styles/SignUp.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login, logout } from "../reducers/user";


function SignUp({onClose}) {
  const dispatch = useDispatch();
  
  //variable d'etat pour les 3 champs de saisies.
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //fonction pour gérer la création du compte.
  const handleSignUp = () => {
    console.log("ok");
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, username, password }),
    })
      .then((response) => response.json())
      .then((userData) => {
        if (userData.result) {
          dispatch(login({username: username, token: userData.token, firstname: firstname}))
          setFirstname("");
          setUsername("");
          setPassword("");
          window.location.assign("/");
        }
      });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
              <FontAwesomeIcon icon={faXmark} onClick={(onClose)} />  
          </div>
          <div className={styles.modalBody}>
            <div className={styles.logoContainer}>
              <Image
                src="/logo.png"
                alt="logo"
                className={styles.logo}
                width={100}
                height={100}
              />
              <h3 className={styles.h3}>Create your Hackatweet account</h3>
            </div>
            <div className={styles.formulaire}>
              <input
                className={styles.input}
                type="text"
                placeholder="Firstname"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button
                className={styles.button}
                onClick={() => handleSignUp()}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
