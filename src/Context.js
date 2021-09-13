import React, {Component} from 'react';
import items from './data'
const RoomContext = React.createContext();


class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };
    componentDidMount() {
        let rooms = this.formattedData(items);
        let featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(room => room.price))
        let maxSize = Math.max(...rooms.map(room => room.size))
        this.setState({
            rooms, featuredRooms, sortedRooms: rooms, loading: false, price: maxPrice, maxPrice, maxSize
        })
    }
    formattedData(allItemsData){
        let newItems = allItemsData.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;
        })
        return newItems
    }
    getRoom = (slug) => {
        let rooms = this.formattedData(items);
        // let rooms = [...this.state.rooms];
        let roomData = rooms.find(room => room.slug === slug)
        return roomData
    }
    handleChange = e => {
        const target = e.target
        const value = e.type === 'checkbox' ? target.checked : target.value
        const name = e.target.name
        // const value = e.target.value
        this.setState({
            [name]: value
        }, this.filterRooms)

    }
    filterRooms = () => {
        console.log('hello')
        let {rooms, type, price, size, minPrice, maxPrice, minSize, maxSize, breakfast, pets, capacity} = this.state
        let tempRooms = [...rooms]
        capacity = parseInt(capacity)
        price = parseInt(price)
        if(type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        if(type !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity === capacity)
        }
        tempRooms = tempRooms.filter(room => room.price <= price)
        tempRooms = tempRooms.filter(
            room => room.size >= minSize && room.size <= maxSize
        )
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        } 
        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider value = {{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
const RoomConsumer = RoomContext.Consumer
const withRoomConsumer = (Component) => {
    const ConsumerWrapper = (props) => {
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
    return ConsumerWrapper
}
export { RoomProvider, RoomConsumer, RoomContext, withRoomConsumer }