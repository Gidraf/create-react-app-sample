import React, {useEffect, useState} from 'react';
import './problem.scss';

export const Problem = (props)=>(
    <div class="problem">
            <h1 class="the-problem">The Problem</h1>
            <div class="right-problem">
                    <li class="right-problem-li">
                        <img class="right-img-problem" src={require("./ic_statistics.svg")} alt=""/>
                        <p class="right-span-problem">Lack of an efficient and effective way for governments, NGOs and health professionals to be able to track primary infection points and be able to anticipate, manage and decimate potential future flash points for the Covid-19 virus</p>
                    </li>
                    <li class="right-problem-li2">
                        <img class="right-img-problem" src={require("./ic_statistics (2).svg")} alt=""/>
                        <p class="right-span-problem">No standard digital platform for the general public to be able to access genuine information, get help, see exposure/risk levels and get real time alerts from the government.</p>
                    </li>
            </div>
          
        </div>
)