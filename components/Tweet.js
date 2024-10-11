import styles from '../styles/Tweet.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

function Tweet(props) {
    
    const user = useSelector((state) => state.user.value);

    const [isVisible, setIsVisible] = useState(true);

    let trash = "";
    if(props.user.token === user.token) {
        trash = <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete()}  />
    }
    
    console.log(props);
    const handleDelete = () => {
        fetch(`http://localhost:3000/tweets/${props._id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
		})
        .then(response => response.json())
        .then(data => {
            setIsVisible(false);
            console.log(data);
        });
	}
    if(isVisible) {
        return (
            <div className={styles.tweet}>
            
                <div className={styles.tweetUser}>
                    <p>{props.user.firstname} <span>@{props.user.username} · XXXXXX</span></p>
                </div>
                <p>{props.message}</p>
                <div className={styles.actions}>
                    <span><FontAwesomeIcon icon={faHeart} /> 0</span>
                    <span>{trash}</span>
                </div>
                
            </div>
        )
    } else {
        return "";
    }

}

export default Tweet;
