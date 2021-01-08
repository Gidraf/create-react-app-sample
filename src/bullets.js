import React from 'react';
import './bullets.scss';

export const BulletsPoint = (props)=>(
    
    <div class="bullets-features" >
        <ul className="bullets-ul-1">
            <h2 className="bullets-h2">National Government Dashboard</h2>
            <p className="bullets-p">Features</p>
            <li className="bullets-li">
            Access Support Panel
            </li>
            <li  className="bullets-li">
            Track Live Location
            </li>
            <li  className="bullets-li">
            Showcase realtime update o covid-19
            </li>
            <li  className="bullets-li">
            Push real time alerts and news articles</li>
            <li  className="bullets-li">
            
            Create Account for counties and desolved governments</li>
            <li  className="bullets-li">
            Emergency Response
            </li>
            <li  className="bullets-li">
            Setup and map testing center
            </li>
            <li  className="bullets-li">
            Flag potential risk affeted areas</li>
            <li  className="bullets-li">
            Register Cases and Collect any useful data
            </li>
        </ul>

        <ul className="bullets-ul-2">
            <h2 className="bullets-h2">County/Devolved Government Dashboard</h2>
            <p className="bullets-p">Features</p>
            <li className="bullets-li">
            Showcase county exposure/ risk level
            </li>
            <li className="bullets-li">
                Support Panel
            </li>
            <li className="bullets-li">
                Map highlighting cases reported at the counties and the exact location
            </li>
        </ul>
    </div>
)