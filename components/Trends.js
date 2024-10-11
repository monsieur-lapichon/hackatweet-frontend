import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';

function Trends () {

    const [trends, setTrends] = useState([]);
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
        .then(response => response.json())
        .then(tweetsData => {
            console.log('tweetsData :', tweetsData);
            setTweets(tweetsData.tweets);
        })
        
        fetch('http://localhost:3000/trends')
        .then(response => response.json())
        .then(trendsData => {
        console.log('trendsData :', trendsData);
        setTrends(trendsData.trends);
        });
        
    }, []);
    
    const tweetsByTrends = trends.map(trend => {
        const tweetCount = tweets.filter(tweet => 
            tweet.message.includes(trend.name)).length

        return {name: trend.name, tweetCount: tweetCount}
    });

    const handleHashtagClick = () => {
        window.location.assign('/hashtag')
    }

    return (
        <div className={styles.trendsContent}>
            <h2 className={styles.trendsTitle}>Trends</h2>
            {tweetsByTrends.map((trend, index) =>
                <div className={styles.pointerTrends} key={index} onClick={() => handleHashtagClick()}>
                    <p>{trend.name}</p>
                    <span>{trend.tweetCount}</span>
                </div>
            )}
           
        </div>
    )

}

export default Trends;