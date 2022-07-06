import React from 'react';
import Footer from './component/Footer';
import Main from './component/Main';

export default function App(){
    return(
        <div>
            <img src="./images/profile.jpg" className="profile_img"/>
           <Main />
            <Footer />
        </div>
    )
}