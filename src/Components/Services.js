import React, {Component} from 'react'
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/all";

class Services extends Component  {
    state = {
        services:[
            {
                icon: <FaCocktail/>,
                title: 'Free Cocktail',
                info: 'You will get free cocktail, You will get free cocktail, You will get free cocktail, You will get free cocktail'
            },{
                icon: <FaHiking/>,
                title: 'Free Hiking',
                info: 'You will get free cocktail, You will get free cocktail, You will get free cocktail, You will get free cocktail'
            },{
                icon: <FaShuttleVan/>,
                title: 'Free Stulle van',
                info: 'You will get free cocktail, You will get free cocktail, You will get free cocktail, You will get free cocktail'
            },{
                icon: <FaBeer/>,
                title: 'Free Beer',
                info: 'You will get free cocktail, You will get free cocktail, You will get free cocktail, You will get free cocktail'
            },
        ]
    }
    render(){
        return (
            <section className='services'>
                <Title title='Services'></Title>
                <div className='services-center'>
                    {this.state.services.map((service, index) => {
                        return(
                            <article className='service' key={index}>
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        )

                    })}
                </div>
            </section>
        )
    }

}

export default Services