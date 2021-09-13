import React from 'react'
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
// import {RoomConsumer} from "../Context";
import {withRoomConsumer} from "../Context";
import Loading from "./Loading";

function RoomContainer ({context}) {
    const {loading, sortedRooms, rooms} = context
    if (loading) {
        return <Loading/>
    }
    return (

        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    )

}

export default withRoomConsumer(RoomContainer)


// const RoomContainer = () => {
//     return(
//         <RoomConsumer>
//             {
//                 value => {
//                     const {loading, sortedRooms, rooms} = value
//                     if (loading) {
//                         return <Loading/>
//                     }
//                     return (
//
//                         <>
//                             <div>I am in room containre</div>
//                             <RoomsFilter/>
//                             <RoomsList/>
//                         </>
//                     )
//                 }
//             }
//
//         </RoomConsumer>
//     )
//
//
// }
//
// export default RoomContainer