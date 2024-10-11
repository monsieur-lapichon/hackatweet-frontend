import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/user';
import Tweet from './Tweet';
import Trends from '../components/Trends';

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  //console.log(user.token);
  if(user.token=="" || user.token==null) {
    window.location.assign("/login");
  }
  
  const [tweetContent, setTweetContent] = useState('');

  const [tweetsData, setTweetsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(data => {
        setTweetsData(data.tweets.filter((data, i) => i > 0));
      });
  }, []);

  const tweets = tweetsData.map((data, i) => {
      return <Tweet key={i} {...data} />;
  });
  
  const handleLogout = () => {
    dispatch(logout());
    window.location.assign("/login")
  }

  const handleNewTweet = () => {
    /*console.log("user._id",user._id)
    fetch(`http://localhost:3000/tweets/${user._id}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: tweetContent }),
    }).then(response => response.json())
      .then(data => {
        console.log("handleNewTweet",data)
      });
      */
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
        <div className={styles.tweetBox}>
          <h2>Home</h2>
          <input
            className={styles.tweetInput}
            placeholder="What's up?"
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
          />
          <div className={styles.tweetActions}>
            <button className={styles.tweetButton} onClick={()=> handleNewTweet()}>Tweet</button>
          </div>
        </div>

        <div className={styles.tweetsList}>
          {tweets}
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

export default Home;
