import React, {useState, useEffect} from 'react';
import './App.css';


const GetQuote= ()=> {
const [quote, setQuote] = useState([])
const [clickNext, setClickNext] = useState(0);


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
            <button  className = 'btn' onClick={() => setClickNext(clickNext + 1)}>Next Quote</button>
                
    
            </div>
        </div>
    )
}
export default  GetQuote