import { useState } from 'react'


export default function CreateTweet({addTweet}) {

    const [text, setText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text === "")return;
        const content = text;
        const date = new Date().toISOString();
        const newTweet = {content, date}
        addTweet(newTweet)
        
        setText('')
    }

    const handleTextChange = (e) => {
        const tweet = e.target.value;
        setText(tweet)
        if(tweet ===""|| tweet.length > 140){
            setIsDisabled(true)
        }else {
            setIsDisabled(false)
        }
        
    }
      
 
    return (
        <div>
            <form onSubmit={handleSubmit} >
               <input onChange={handleTextChange} type="textarea"  value={text} placeholder="What do you have in mind..." />
                <input type="submit" value="Tweet" disabled={isDisabled} />
            </form>
        </div>
    )
}
