import styles from '../styles/Hashtag.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/user';
import Trends from '../components/Trends';
import user from '../reducers/user';

function Hashtag({hashtag}) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    
    const [tweetsFind, setTweetsFind] = useState([]);
    const [searchTweet, setSearchTweet] = useState('');
    
    useEffect(() => {
        fetch(`http://localhost:3000/tweets?hashtag=${hashtag}`)
            .then(response => response.json())
            .then(data => {
                setTweetsFind(data.tweets);
            });
    }, [hashtag]);
    

    const handleLogout = () => {
      dispatch(logout());
      window.location.assign("/login")
    }
  
    const handleHome = () => {
        window.location.assign("/")
      }

    return (
      <div className={styles.container}>
        
        <div className={styles.leftContent}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="logo" width={50} height={50} onClick={() => handleHome()}/>
          </div>
          <div className={styles.userSection}>
            <div className={styles.user}>
              <p>{user.firstname}</p>
              <p>@{user.username}</p>
            </div>
            <button className={styles.logoutButton} onClick={()=> handleLogout()}>Logout</button>
          </div>
        </div>
  
        <div className={styles.centralContent}>
          <div className={styles.hashtagBox}>
            <h2>Hashtag</h2>
            <input
              className={styles.hashtagInput}
              placeholder='Search your #hashtag'
              
            />
          </div>
  
          <div className={styles.tweetsList}>
            {tweetsFind.map((tweet, index) => {
                <div className={styles.tweet}>
                {tweet.message}
              </div>
            })}
            
          </div>
        </div>
  
        <div className={styles.rightContent}>
            <div className={styles.trendsContainer}> 
                <Trends/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Hashtag;