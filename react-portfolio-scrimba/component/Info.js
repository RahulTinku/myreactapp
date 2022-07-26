import React from 'react';

export default function Info(){
    return(
        <section>
            <div className="section-info">
                <h1>Rahul Kumar</h1>
                <h4>Frontend Developer</h4>
                <p>rahulkumar.website</p>
            </div>
            <div className="section-button">
                <button type="button" value="Email" className="section--button-email">
                <img src="../images/Icon.png"  alt="image"/>Email</button>
                <button type="button" value="LinkedIn" className="section--button-social">
                <img src="../images/Vector.png" />Linkedln</button>
            </div>
        </section>
        )
}