import React, {Component} from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import {RoomContext} from "../Context";
import {Link} from 'react-router-dom'
import defaultBackground from '../images/defaultBcg.jpeg'

class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state = {slug: this.props.match.params.slug, defaultBackground}

    }
    static contextType = RoomContext
    componentDidMount() {
        const {getRoom} = this.context;
        let room = getRoom(this.state.slug)
        this.setState({room: room})
    }

    render() {
        if(!this.state.room) {
            return <div className='error'>
                <h4>No room could be found</h4>
                <Link to='/' className='btn-primary'>Back to home</Link>
            </div>
        }else {
            const {name, description, capacity, size, price, extras, breakfast, pets, images} = this.state.room
            return (
                <>
                    <Hero hero='roomsHero'>
                        <Banner title={`${name} Room`}>
                            <Link to='/rooms' className='btn-primary'>Search Rooms</Link>
                        </Banner>

                    </Hero>
                    <section className='single-room'>
                        <div className='single-room-images' >
                            {images.map((image, index) => {
                                return <img key={index} src={image} alt=''/>
                            })}
                        </div>
                        <div className='single-room-info'>
                        <article className='desc'>
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                            <article className='info'>
                                <h3>info</h3>
                                <h6>price: Rs {price}</h6>
                                <h6>size: {size} SQFT</h6>
                                <h6>max capacity: {""} { capacity > 1 ? `${capacity} persons` : `${capacity} person`}</h6>
                                <h6>pets: {pets}</h6>
                                <h6>{breakfast && 'free breakfast included'}</h6>
                            </article>
                        </div>
                    </section>
                    <section className='room-extras'>
                        <h3>Extras</h3>
                        <ul className='extras'>
                            {extras.map((extra, index) => {
                                return <li key={index}>- {extra}</li>
                            })}
                        </ul>
                    </section>
                </>

            )

        }

    }
}

export default SingleRoom;