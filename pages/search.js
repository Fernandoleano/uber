import React from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const search = () => {
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
                    <Input placeholder="Enter pickup location"/>
                    <Input placeholder="Where to?"/>
                </InputBox>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
            </InputContainer>
            {/* saved places */}
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved Places
            </SavedPlaces>
            {/* Confirm location */}
            <ConfirmLocation>
                Confirm Location
            </ConfirmLocation>
        </Wrapper>
    )
}

export default search

const Wrapper = tw.div `
    bg-gray-300 h-screen
`

const BtnContainer = tw.div `
    bg-white px-4
`

const BackBtn = tw.img `
    h-12
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
    w-10 h-10 bg-gray-300 rounded-full ml-3
`

const SavedPlaces = tw.div `
    flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img `
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmLocation = tw.div `
    flex p-4 mt-3 my-2 h-14 border p-px flex-col rounded-lg items-center justify-center px-4 py-2 text-2xl text-white bg-black transform hover:scale-105 transition
`