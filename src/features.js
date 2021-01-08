import React from 'react';
import './features.scss';

export const Features = ()=>(
    <div className="features">
    <h1 className="the-features">Public mobile app features</h1>
    <ul className="features-ul">
        <li className="features-li">
            <img src={require("./Group 54.svg")} alt=""/>
            <span className="features-span">Track Exposure/Risk Level using anonymized location data</span>
        </li>
        <li className="features-li">
            <img src={require("./Group 53.svg")} alt=""/>
            <span className="features-span">Statistics</span>
        </li>
        <li className="features-li">
            <img src={require("./Group 52.svg")} alt=""/>
            <span className="features-span">Dedicated Helpline</span>
        </li>
        <li className="features-li">
            <img src={require("./Group 51.svg")} alt=""/>
            <span className="features-span">Testing centers</span>
        </li>
        <li className="features-li">
            <img src={require("./Group 50.svg")} alt=""/>
            <span className="features-span">Tips on How to stay safe</span>
        </li>
        <li className="features-li">
            <img src={require("./Group 49.svg")} alt=""/>
            <span className="features-span">Real-time Curfew alerts using traffic data</span>
        </li>
    </ul>
    <img  src={require("./Ellipse 36.svg")} className="features-image" alt=""/>
<div className="samsung-phones">
    
    <img  src={require("./Samsung Galaxy S9.png")} className="samsung-1" alt=""/>
    <img  src={require("./Samsung Galaxy S93.png")} className="samsung-2" alt=""/>
   
</div>
</div>
)