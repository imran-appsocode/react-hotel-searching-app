import React from 'react'
import Room from "./Room";

const RoomsList = ({rooms}) => {
    if (rooms.length === 0) {
        return (
            <div className='empty-search'>Unfortunately there is no room</div>
        )
    }
    return <section className='roomslist'>
        <div className='roomslist-center'>
            {rooms.map((room, index) => {
                return <Room key={index} room={room}></Room>
            })}
        </div>
    </section>
}

export default RoomsList