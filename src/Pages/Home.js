import React from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import FeaturedRooms from "../Components/FeaturedRooms";
import {Link} from 'react-router-dom'

export default function Home() {
    return(
    <>
        <Hero hero='defaultHero'>
            <Banner title="Luxury Rooms" subTitle='Rooms available here at Rs 5000'>
                <Link to='/rooms' className='btn-primary'>Search Rooms</Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
    </>
);
}