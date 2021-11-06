import React from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = () => {
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
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetail>
                        <Price>$22.00</Price>
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