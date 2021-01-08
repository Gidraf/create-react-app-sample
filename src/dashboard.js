import React from 'react';
import './dashboard.scss';
import { BulletsPoint } from './bullets'
import { Footer } from './footer';

export const Dashboard = ()=>(
    <div class="features-dashboard">
           
    <div class="dashboard">
        <h1 class="the-features">Institutional Dashboard</h1>
    </div>
    <BulletsPoint />
    <Footer/>
    </div>
)