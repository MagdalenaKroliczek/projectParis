import React from "react";
import '../../App.css';
import './Abraxas.css';
import Footer from "../Footer";
import Carousel from "../Carouselsenchal";


function Senchal() {
    return (
        <>
        <h1 className="senchal_photo"></h1>
        <h2>Le Manoir Sénéchal </h2>
       
        <div className="description__text">
        This elegant Art Deco-style mansion was built in 1907 by the architect G. Sénéchal, known among other things for the restoration of the medieval church of Soulles.
        The style of the manor is classic of the region, slate roof, a tower and spiers, walls in millstone and red brick for aesthetics, a large raised porch with columns, several small balcony-terraces (including one on the ground floor of glass), etc ...
        On the south facade we can see an original sundial accompanied by a poem in four lines.
        Inside, disappointment, the place is empty.
        Nothing very interesting apart from the beautiful volumes and a large wooden staircase leading to the four levels.
        A piece of furniture remains, however, a piano, very damaged however but in working order.
        The cellar is quite worthy of interest, a beautiful vault of freestone and an original pattern in wrought iron on a window.
        The most interesting in these places are the exteriors, the manor really has an undeniable character but it is unfortunately abandoned and it would be a shame if it disappeared ...
        </div>
        <Carousel/>
        <Footer />
        </>
    ) ;
}

export default Senchal;