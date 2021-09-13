import React from 'react';
import {Link} from 'react-router-dom'
import defaultImg from '../images/details-1.jpeg'
import PropTypes from 'prop-types'
const Room = ({room}) => {
    const {name, slug, images, price} = room
    return <article className='room'>
       <div className='img-container'>
           <img src={images[0] || defaultImg} alt='single'/>
           <div className='price-top'><h5>Rs {price}</h5> <p>per night</p></div>
           <Link to={`/room/${slug}`} className='btn-primary room-link'>More Info</Link>
       </div>
        <p className='room-info'>{name}</p>
    </article>
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}
export default Room;