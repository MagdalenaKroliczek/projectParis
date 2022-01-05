import React from "react";
import '../../App.css';
import './Abraxas.css';
import Footer from "../Footer";
import Carousel from "../Carouseldomaine";


function Domaine() {
    return (
        <>
        <h1 className="zielona_photo"></h1>
        <h2>DOMAINE DES 3 COLONNES  </h2>
       
        <div className="description__text">Today I would like to introduce you to a fantastic place that is located near Paris.
            I went there in October 2017.
            The mansion was built at the beginning of the 20th century in Anglo-Norman style.
            It consists of 3 floors and a large park (50 hectares)
            The property had several owners and most of them ended tragically
            which can call this house cursed.
            It was inhabited by min. Tupine couple. On the night of January 7-8, 1875, they were found dead, holding hands. They were murdered.
            There is their grave in the local cemetery (photo below)
            During World War II, the Weisweiller family (people of Jewish origin) experienced a horror here when the Nazis arrived.
            Betty was deported to Auschwitz and her husband committed suicide.
            The house was temporarily occupied by the Nazis in 1940.
            The last owner was Gustave Leven who died in 2008.
            From that time, a battle continued on what to do with the house, the information found indicates that a complex of apartments is to be built there.
        </div>
        <Carousel/>
        <Footer />
        </>
    ) ;
}

export default Domaine;