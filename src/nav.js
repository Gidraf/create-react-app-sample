import React, {useEffect,useState} from 'react';
import './nav.scss';

export const Nav = ()=>(
    <nav class="nav">
    <img  class="logo-icon" src={require("./covid_image.svg")} alt="Covid 19"/>
     <span class="li-left">Covid 19</span>
 <ul class="ul-nav">
     <li class="li-nav">Home</li>
     <li class="li-nav">About</li>
     <li class="li-nav">Contact</li>
 </ul>
 </nav>
);