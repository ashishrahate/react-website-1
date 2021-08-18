import React from 'react';
import './Cards.css';
// import Image from '../images';
import CardItem from './CardItem';
// import Image from '../images/img-8.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out this EPIC destination.</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={require("../assets/images/img-8.jpg").default} alt="image" text="Explore the hidden Desert"
                        label="Adventure" path="/services"
                        />
                         <CardItem 
                        src={require("../assets/images/img-2.jpg").default} alt="image" text="Explore the Refreshing Beach"
                        label="Adventure" path="/services"
                        />
                         

                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                        src={require("../assets/images/img-1.jpg").default} alt="image" text="Explore the Divine Mountains of Bali"
                        label="Adventure" path="/services"
                        />
                        <CardItem 
                        src={require("../assets/images/img-1.jpg").default} alt="image" text="Explore the Divine Mountains of Bali"
                        label="Adventure" path="/services"
                        />
                        <CardItem 
                        src={require("../assets/images/img-1.jpg").default} alt="image" text="Explore the Divine Mountains of Bali"
                        label="Adventure" path="/services"
                        />
                        </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
