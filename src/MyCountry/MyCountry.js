import React from 'react'
import './MyCountry.css'


const MyCountry = () => {

   

   const getData = async () => {
    
        const res = await fetch(`https://restcountries.com/v3.1/name/pakistan`);
        const resData = await res.json();
       
        document.querySelector(".flag").src = resData[0].flags.png.toString();
        document.querySelector(".population").innerHTML = resData[0]['population']; 
        document.querySelector(".capitalName").innerHTML = (resData[0]['capital'])[0];
        document.querySelector(".nationalLang").innerHTML = resData[0]['languages']['urd'];
        document.querySelector(".name").innerHTML = resData[0]['name'].common;
    }

    setTimeout(getData,10);

    return (
        <>
            <div className="container">
                <img alt="Pakistan Flag" className='flag' />
                <div>Country: <span className="name"></span></div>
                <div className="capital">Capital: <span className='capitalName'></span></div>
                <div className="lang">National Language: <span className='nationalLang'></span></div>
                <div className="pop">Population: <span className='population'>0</span></div>
            </div>

        </>
    )
}

export default MyCountry
