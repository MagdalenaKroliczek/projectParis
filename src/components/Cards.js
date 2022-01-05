import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this places</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    <CardItem
                    // src={`${process.env.PUBLIC_URL}./../images/abandVille.jpg`}
                    src='/../images/complex1.jpg'
                    text = 'Les Espaces d Abraxas '
                    label = 'Discover'
                    path='/abraxas'
                    />
                     <CardItem
                    src='./../images/szpital.jpg'
                    text = 'Mysterious hospital'
                    label = 'Discover'
                    path='/hopital'
                    />
                    </ul>
                    <ul className='cards__items'>
                    <CardItem
                    src='./images/zielona.jpg'
                    text = 'Domaine des 3 Colonnes '
                    label = 'Discover'
                    path='/Domaine'
                    />
                    <CardItem
                    src='./images/pereLachaise.jpg'
                    text = 'Secrets of the Père Lachaise cemetery'
                    label = 'Discover'
                    path='/cemetery'
                    />
                    </ul>
                    <ul className='cards__items'>
                    <CardItem
                    src='./images/manu.jpg'
                    text = 'Le Manoir Senchal'
                    label = 'Discover'
                    path='/senchal'
                    />
                     <CardItem
                    src='./images/popkow1.jpg'
                    text = 'Le château du duc d Épernon '
                    label = 'Discover'
                    path='/epernon'
                    />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
