import React from "react";
import '../../App.css';
import './Abraxas.css';
import Footer from "../Footer";
import Carousel from "../Carousel";


function Abraxas() {
    return (
        <>
        <h1 className="abraxas_photo"></h1>
        <h2>Les Espaces d'Abraxas </h2>
       
        <div className="description__text">I would like to introduce you to the Abraxas Complex (Les espaces d'Abraxas)
A great place that is next to Paris and often not even Parisians know it exists!

The building was designed by Ricardo Bofill, a Spanish architect who is known for his unconventional ideas.
The intention of the author was to integrate various social classes. He wanted rich and poor people to live in the building. The idea failed and these are council flats.
There are many dealers in the area and it cannot be denied that it is not a very safe neighborhood.
Therefore, do not go there alone I wanted to steal my camera.

But let's see what the irreplaceable Wikipedia tells us about this place:

"The building complex comprises 600 apartments in three buildings: the Theater to the West, the Arch in the Center and the Palacio to the East.
The Palacio is a massive 18-story building with Neo-Greek inspiration and an orthogonal shape. It consists of four staircases (two cabins and a spiral staircase), each of which can accommodate about 250 apartments.
The theater is a more modest building surrounding the square, evoking the forms of ancient theaters. It consists of several staircases (elevator and staircase) and houses about twenty apartments per staircase. The whole is in the form of a half-cylinder hollowed in the middle.
The arch consists of two staircases that connect on the 7th floor to form an arch. This arch is surrounded by the Palacio and the theater.

I remember that when I visited this place, I was speechless the first time!
I have never seen such overwhelming buildings, the climate is very strange and it is impossible to feel safe in this place. A bit like a science fiction movie.
Anyway, a lot of movies and music videos were shot here! e.g. "The Hunger Games: Mockingjay"

Even the buttons on the elevator show that you are in a different world.
Anyway, see for yourself!
        </div>
        <Carousel/>
        <Footer />
        </>
    ) ;
}

export default Abraxas;