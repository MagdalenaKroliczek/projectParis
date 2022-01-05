import React from "react";
import '../../App.css';
import './Abraxas.css';
import Footer from "../Footer";
import Carousel from "../Carouselepernon";


function Epernon() {
    return (
        <>
        <h1 className="epernon_photo"></h1>
        <h2>Le château du duc d Épernon </h2>
       
        <div className="description__text">
        The Popkov Castle or its real name the castle of the Duke of Epernon is located in Seine et Marne (77) along the Bréon (a small river flowing around the castle).
        The name "castle of the Duke of Epernon" comes from its former owner Jean Nogaret de La Valette, also Duke of Fontenay-en-Brie (77). The castle was the home of prestigious personalities such as Charles IX, Catherine de Medici, Richelieu, the Queen of Spain Isabelle II, ...
        The current castle is built on the ruins of a fortified castle mentioned in the 12th century, rebuilt in 1389 by Jean le Mercier who will give it its current structure (rectangular structure flanked by 2 round towers).
        Rebuilt again in 1538, it did not become a pleasure castle until the first half of the 17th century. The last modifications undergone took place in 1837 by order of the owner, the Marquis Gontaut-Biron.
        The castle then passed into the hands of many owners but it was not until the 1940s that it was abandoned, the owners favoring the outbuildings which would soon be transformed into an apartment.
        Today, the castle is in a sorry state and only the reinforcement of the frame keeps it from collapsing. Various petitions have been launched by the inhabitants of the surroundings who are campaigning for its restoration, the castle having an exceptional history, which has hosted kings and queens of France.
        </div>
        <Carousel/>
        <Footer />
        </>
    ) ;
}

export default Epernon;