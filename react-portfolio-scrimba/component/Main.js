import React from 'react';
import Info from './Info';
import About from './About';
import Interest from './Interest';

export default function Main(){
    return(
        <main className="main">
            <Info />
            <About />
            <Interest />
        </main>
    )
}