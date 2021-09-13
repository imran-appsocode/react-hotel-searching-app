import React, {useContext} from 'react'
import {RoomContext} from "../Context";
import Title from "./Title";
import Room from "./Room";
const getUniqueValues = (items, values) => {
    return [...new Set(items.map(item => item[values]))]
}

const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext)
    const { handleChange, type, price, capacity, size, breakfast, pets, minPrice, maxPrice, minSize, maxSize} = context
    let getUniqueTypes = getUniqueValues(rooms, 'type')
    getUniqueTypes = ['all', ...getUniqueTypes]
    let getUniqueCapacity = getUniqueValues(rooms, 'capacity')
    return (
        <section className='filter-container'>
            <Title title='search rooms'></Title>
            <form className='filter-form'>
                <div className='form-group'>
                    <label htmlFor='type'>Room Type</label>
                    <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                        {getUniqueTypes.map((type, index) => {
                            return <option key={index} vlaue={type}>{type}</option>
                        })}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select name="capacity"
                            id="capacity"
                            onChange={handleChange}
                            className="form-control"
                            value={capacity}>
                        {getUniqueCapacity.map((type, index) => {
                            return <option key={index} vlaue={type}>{type}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">room size </label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                        <input
                            type="number"
                            name="maxSize"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default RoomsFilter