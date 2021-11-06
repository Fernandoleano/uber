import { useState } from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const Search = () => {

    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");

    return (
        <Wrapper>
            {/* button container */}
            
            <BtnContainer>
            <Link href="/">
                <BackBtn src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </BtnContainer>
            {/* input container */}
            <InputContainer>
                <FromToIcon>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
                </FromToIcon>
                <InputBox>
                    <Input 
                    placeholder="Enter pickup location"
                    value={pickup}
                    onChange={(e) => setPickup (e.target.value)}
                    />
                    <Input 
                    placeholder="Where to?"
                    value={dropoff}
                    onChange={(e) => setDropoff (e.target.value)}
                    />
                </InputBox>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
            </InputContainer>
            {/* saved places */}
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved Places
            </SavedPlaces>
            {/* Confirm location */}
            <Link href={{
                pathname: "/confirm",
                query: {
                    pickup: pickup,
                    dropoff: dropoff
                }
            }}>
            <ConfirmLocation>
                Confirm Location
            </ConfirmLocation>
            </Link>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div `
    bg-gray-300 h-screen
`

const BtnContainer = tw.div `
    bg-white px-4
`

const BackBtn = tw.img `
    h-12 cursor-pointer
`

const Circle = tw.img `
    h-2.5
`

const Line = tw.img `
    h-10
`

const Square = tw.img `
    h-3
`

const InputContainer = tw.div `
    bg-white flex item-center px-4 mb-2
`

const FromToIcon = tw.div `
    w-10 flex flex-col mr-2 items-center
`

const InputBox = tw.div `
    flex flex-col flex-1
`

const Input = tw.input `
    h-10 bg-gray-300 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img `
    w-10 h-10 bg-gray-300 rounded-full ml-3 cursor-pointer
`

const SavedPlaces = tw.div `
    flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img `
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2 cursor-pointer
`

const ConfirmLocation = tw.div `
    bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`