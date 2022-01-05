import React from "react";
import '../../App.css';
import './Abraxas.css';
import Footer from "../Footer";
import Carousel from "../Carouselcemetery";


function Cemetery() {
    return (
        <>
        <h1 className="cemetery_photo"></h1>
        <h2>Secrets of the Père Lachaise cemetery </h2>
       
        <div className="description__text">
In This Story

PLACE
Père Lachaise Cemetery
Bat tomb symbol in Pere Lachaise Cemetery in ParisBat in Père-Lachaise Cemtery (photograph by the author)

THE SYMBOLISM OF CEMETERIES CAN be rather ominous, with skulls and flying souls and the refrain of memento mori — remember that you will die. By the 19th century, however, most cemeteries in Western Europe and the United States had moved to a gentler Victorian iconography, focusing on eternal life with inverted flames still burning in the dark, and weeping angels with their beautiful carved faces demurely turned to the ground. Yet in Père Lachaise Cemetery in Paris, opened in 1804, a curious dark symbol repeats itself: the bat. 

Most visitors to this most touristy of cemeteries don’t notice the flying creatures carved in stone or formed in tomb doors, but keep an eye out and you’re likely to see at least one on your visit. As Shannon Moore Shepherd wrote for Atlas Obscura in her account of visiting the cemetery with Jacques Sirgent of the Paris vampire museum, 14 bats are hidden in the cemetery, which, when followed, supposedly ”put you directly in front of the grave [Sirgent] believes the original Dracula was transported to a long time ago.”

Bat tomb symbol in Pere Lachaise Cemetery in ParisThe Lautru & Margot tomb (photograph by the author)

There is an undercurrent of vampire mythology in the cemetery. In the 1913 German story Das Grabmal auf dem Père Lachaise by Karl Hans Strobl, a man takes the bargain of a fortune in exchange for spending a year in the tomb of a countess, and finds that he is unable to depart the claustrophobic grave. He suspects that a vampire may be the cause, although the tale is as much about the loss of a sense of self. There’s also the jesting 19th century Les Étrennes d’un vampire, said to have been copied from a manuscript found in the cemetery. 

THE GASTRO OBSCURA BOOK
Taste the World!
An eye-opening journey through the history, culture, and places of the culinary world.
Order Now
Gastro Obscura Book
Then there is the very real and gruesome history of François Bertrand. In 1848, graves in Père-Lachaise were found brutally dug open, the corpses grotesquely ripped to fleshy shreds. It turned out that Bertrand — a French military sergeant proclaimed the “Vampire of Montparnasse” in the frenzied press — was to blame, and he admitted to an uncontrollable impulse to mutilate bodies in their graves. 

Some cemetery visitors have noted the eerie Valachie mausoleum on the “Allée du Dragon.” Vlad Dracul, father of the man who became Vlad the Impaler and inspired Bram Stoker’s Dracula, means ”Vlad the Dragon,” and on top of the tomb is a sculpture of an eagle grasping in its talons a cross and what looks like a stake. 
        </div>
        <Carousel/>
        <Footer />
        </>
    ) ;
}

export default Cemetery;