import React, {useState} from 'react'
import './joke.css';

let jokeText;
const getJoke = () => {
    
    const setHeader = {
        headers: {
            Accept : "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com', setHeader)
    .then((res) => res.json()).then((data) =>{
        jokeText = data.joke;    
    }).catch((err) => {
        console.log(err);
    })
    if(jokeText){
        document.querySelector('.joke-text').innerHTML=jokeText;
    }
}



const Joke = () => {
    getJoke()
    
    return (
    <>
        <div className="container">
            <h4 className='joke-headline'>Jokes Generator </h4>
            <span className="joke-text"></span>
            <div className="next-btn" onClick={ ()=>{  getJoke(); document.querySelector(".next-btn").innerHTML = "Next";}  }>Generate</div>
        </div>
        
    </>

    )
}

export default Joke