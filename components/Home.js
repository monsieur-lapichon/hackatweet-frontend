import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useState } from 'react';

function Home() {
  const [tweetContent, setTweetContent] = useState('');
  
  

  return (
    <div className={styles.container}>
      
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </div>
        <div className={styles.userSection}>
          <div className={styles.user}>
            <p>Firstname</p>
            <p>@username</p>
          </div>
          <button className={styles.logoutButton}>Logout</button>
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
            <button className={styles.tweetButton}>Tweet</button>
          </div>
        </div>

        <div className={styles.tweetsList}>
        
          <div className={styles.tweet}>
            <div className={styles.tweetUser}>
              <p>Antoine <span>@AntoineLeProf · 5 hours</span></p>
            </div>
            <p>Welcome to #hackatweet guys 😎</p>
            <div className={styles.likeTweet}>
              <span>❤ 0</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightContent}>
        <h2>Trends</h2>
        <div className={styles.trend}>
          <p>#hackatweet</p>
          <span>2 Tweets</span>
        </div>
        <div className={styles.trend}>
          <p>#first</p>
          <span>1 Tweet</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
