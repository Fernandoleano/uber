import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter();
    const {pickup, dropoff} = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState();
    const [dropoffCoordinates, setdropoffCoordinates] = useState();

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
            <Map 
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
            />
            <BtnContainer>
            <Link href="/search">
                <BackBtn src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </BtnContainer>
            <ConfirmRideContainer>
                <RideSelector />
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
    bg-gray-300
`

const BackBtn = tw.img `
    h-11 rounded-full bg-white cursor-pointer flex flex-1
`