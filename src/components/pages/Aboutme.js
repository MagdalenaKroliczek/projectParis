import React from "react";
import '../../App.css';
import './Aboutme.css';
import Footer from "../Footer";


function Aboutme() {
    return (
        <>
        <h1 className="aboutme">About me</h1>
       
        <div className="presentation__me">My name is Magdalena. I come from Poland.
                I live in Paris for 5 years,
                here I found my passion for photography and searching for unfamiliar places.
                I invite you to discover these beautifful spots. 
                There are a lot of unknown places to visit in and around Paris. 
                On the website you can read about their history.
                If you know more places, don't hesitate to write to me.
        </div>
        <Footer />
        </>
    ) ;
}

export default Aboutme;