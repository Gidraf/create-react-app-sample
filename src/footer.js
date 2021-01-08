import React from 'react';
import "./footer.scss";

export const Footer =()=>(
    <div class="footer">
    <ul className="footer-ul">
    <li  className="li-fot">
    <img className="footer-img" src={require("./covid_image.svg")} alt="Covid 19"/>
    <span className="footer-span" >Covid 19 Technologies</span>
    </li>
        <li class="li-fot"> Terms & Conditions</li>
        <li class="li-fot"> Terms & Conditions</li>
        <li class="li-fot"> Privacy Policy</li>
        <li class="li-fot"> Donate</li>
        <li class="li-fot"> About Us</li>
        <li class="li-fot">Contact Us</li>
    </ul>
</div>
)