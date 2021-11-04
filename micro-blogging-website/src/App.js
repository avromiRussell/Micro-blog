import CreateTweet from './components/CreateTweet'
import TweetList from './components/TweetList'
import {useState, useEffect } from 'react'
import localforage from "localforage";
import './App.css';



function App() {



  const [tweetList, setTweetList] = useState([])


  useEffect(() => {
    const saveTweetList = async () => {
      await localforage.setItem('tweetList',tweetList)
    }
    saveTweetList()
    console.log("set Local forage")
  }, [tweetList])

    useEffect(() => {
    const getTweetList = async () => {
      const tweetListFromStorage = await localforage.getItem('tweetList')
      console.log({tweetListFromStorage})
      if(tweetListFromStorage)
      setTweetList(tweetListFromStorage)
    }
    getTweetList()
  },[])

  const [userName, setUserName] = useState("1")
  function addTweet(newTweet){
   newTweet.userName = userName;
   setTweetList([newTweet, ...tweetList]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <CreateTweet addTweet={addTweet}/>
        <TweetList tweetList={tweetList}/>
      </header>
    </div>
  );
}

export default App;
