import React, {useEffect, useState} from 'react';
import './home.scss';
import {Nav} from './nav'
import {IntroText} from './introText'


export const Home = ()=>{


    return (
        <div className="home">
            <Nav/>
            <IntroText/>
        <input class="down-btn" type="image" src={require("./down.svg")}/>
        <img class="dash-dots" src={require("./Group 9.svg")}/>
    </div>
    )
}