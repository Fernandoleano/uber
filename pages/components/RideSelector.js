import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../../data/carList'
import { faUserAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {

    const [rideDuration, setRideDuration] = useState(0);
    
    // getting the ride duration from mapbox API
    useEffect(() => {
        const rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZmVybmFuZG9sZWFubyIsImEiOiJja3Zsb2NlbzIzN3RtMm5xaWdnZWoybWpsIn0.Kz2AC0hNtMUT6uDojPPW3A`)
        .then(response => response.json())
        .then(data => {
            setRideDuration(data.routes[0].duration / 100)
        })
    }, [pickupCoordinates, dropoffCoordinates])

    return (
        <Wrapper>
            <Title>
                Choose a ride, or swipe for more
            </Title>
            <CarList>
                { carList.map((car, index) => (
                    <Car key={index}>
                        <CarImg src={car.imgUrl}/>
                        <CarDetail>
                            <Service>
                                {car.service}
                                <FontAwesomeIcon icon={faUserAlt}/>
                                {car.people}
                            </Service>
                            <Time>
                                {car.time} min away
                                </Time>
                        </CarDetail>
                        <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                </Car>
                )) }
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div `
    flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div `
    bg-gray-200 text-center text-xs py-2 border-b
`

const CarList = tw.div `
    overflow-y-scroll
`

const Car = tw.div `
    flex p-4 items-center
`

const CarImg = tw.img `
    h-14 mr-4
`

const CarDetail = tw.div `
    flex-1
`

const Service = tw.div `
    font-medium
`

const Time = tw.div `
    text-xs  text-blue-500
`

const Price = tw.div `
    text-sm
`