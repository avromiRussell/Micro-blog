import Tweet from './Tweet';


export default function TweetList({tweetList}) {
    return (
        <div>
           
            {tweetList.map((tweet)=> <Tweet tweet={tweet} key={Math.random()*123456}/>)}
            
           
        </div>
    )
}
