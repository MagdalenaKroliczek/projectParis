import React from "react";
import '../../App.css';
import './Abraxas.css';
import Footer from "../Footer";
import Carousel from "../Carouselhopital";


function Hopital() {
    return (
        <>
        <h1 className="hopital_photo"></h1>
        <h2>Mysterious hospital </h2>
       
        <div className="description__text">There are places in Paris that are unknown, forgotten and inaccessible to tourists.
            Recently, I was lucky to be in one like this.
            I felt like I entered another world.
            There you can find old medical documentation (even from 1845). Books, skeletons of birds that flew in and couldn't find a way out.
            Leaning against the floor, several-meter-high dusty paintings taken from churches, and even statues of saints - unforgettable, placed on the floor in the basement.
            There is also a bicycle that was used to obtain oxygen, hiding in the basement in the event of a bombardment. How? a structure was built, thanks to which, while pedaling, the mechanism that propelled the windmill outwards was propelled.
            After seeing the interiors, we climbed the chapel tower and admired the city from a bird's eye view.
            Below are some photos from this amazing place.
        </div>
        <Carousel/>
        <Footer />
        </>
    ) ;
}

export default Hopital;