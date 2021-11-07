import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter();
    const {pickup, dropoff} = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
    const [dropoffCoordinates, setdropoffCoordinates] = useState([0, 0]);

    const pickUpCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1IjoiZmVybmFuZG9sZWFubyIsImEiOiJja3Zsb2NlbzIzN3RtMm5xaWdnZWoybWpsIn0.Kz2AC0hNtMUT6uDojPPW3A",
            limit: 1
        }))
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center);
        })
    }

    const dropOffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1IjoiZmVybmFuZG9sZWFubyIsImEiOiJja3Zsb2NlbzIzN3RtMm5xaWdnZWoybWpsIn0.Kz2AC0hNtMUT6uDojPPW3A",
            limit: 1
        }))
        .then(response => response.json())
        .then(data => {
            setdropoffCoordinates(data.features[0].center);
        })
    }

    useEffect(() => {
        pickUpCoordinates(pickup);
        dropOffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <BtnContainer>
            <Link href="/search">
                <BackBtn src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </BtnContainer>
            <Map 
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
            />
            <ConfirmRideContainer>
                <RideSelector 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
                />
                <ConfirmBtnContainer>
                    <ConfirmBtn>
                        Confirm UberX
                    </ConfirmBtn>
                </ConfirmBtnContainer>
            </ConfirmRideContainer>
        </Wrapper>
    )
}

export default Confirm


const ConfirmBtn = tw.div `
    bg-black text-white my-4 mx-4 py-4 text-center cursor-pointer text-xl
`

const Wrapper = tw.div `
    flex h-screen flex-col
`

const ConfirmRideContainer = tw.div `
    flex-1 flex flex-col h-1/2
`

const ConfirmBtnContainer = tw.div `
    border-t-2
`

const BtnContainer = tw.div `
    rounded-full absolute top-4 left-4 bg-white shawdow-md z-10 bg-white cursor-pointer
`

const BackBtn = tw.img `
    h-full object-container
`