import React from 'react'
import Component from './Component';
import Milton from './kumar.jpg';
import Kumar from './mypic.jpg';
import Kelash from './myownImage.jpg';
import Kailash from './Kelash.jpg';
import Twin from './kailash.jpg'
;
const Card = () => {
    return (
        <>
            <Component info="Milton is my classfellow and an outstanding Software Developer!" imgsrc={Milton} href="https://github.com/jmrchelani" data="Milton"/>
            <Component info="Kumar studies Software Engineering" imgsrc={Kumar} href="https://github.com/jmrchelani" data="Kumar"/>
            <Component info="Kelash works hard for his future!" imgsrc={Kelash} href="https://github.com/kumarkelashmeghwar" data="Kelash"/>
            <Component info="Kailash is working at Adobe Photoshop!" imgsrc={Kailash} href="https://github.com/Kailash" data="Kailash"/>
            <Component info="Milton is an outstanding Software Developer!" imgsrc={Twin} href="https://github.com/jmrchelani" data="Milton"/>
        </>
    )
}

export default Card
