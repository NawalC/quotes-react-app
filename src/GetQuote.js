import React, {useState, useEffect} from 'react';
import './App.css';


const GetQuote= ()=> {
const [quote, setQuote] = useState([])

// There is no need for this state since you will be fetching a random quote each time anyway
const [clickNext, setClickNext] = useState(0);

// If you remove the clickNext state, then you can make sure that your quotes are fetched on
// initial page load + on buttom click as follows:

// useEffect(()=>{
//     fetchQuote()
// },[])

// const fetchQuote = () => {
//     fetch("https://nawal-quote-server.glitch.me/quotes/random")
//     .then(res => res.json())
//     .then((data)=> setQuote(data))
// }

useEffect(()=>{
    fetch("https://nawal-quote-server.glitch.me/quotes/random")
    .then(res => res.json())
    .then((data)=> setQuote(data))
},[clickNext])



    return (
        <div>
            <div className = 'container'>
            <h2>"{quote.quote}"</h2>
            <h4><em>-{quote.author}</em></h4>
        
            </div>
            <div>
            {/*Can change to:*/}
            {/*<button  className = 'btn' onClick={fetchQuote}>Next Quote</button>*/}
            <button  className = 'btn' onClick={() => setClickNext(clickNext + 1)}>Next Quote</button>
                
    
            </div>
        </div>
    )
}
export default  GetQuote
// Try to keep formatting consistent (indentation, spaces, semi-colons)