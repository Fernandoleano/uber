import { useEffect } from 'react'
import React from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

// The map token
mapboxgl.accessToken = 'pk.eyJ1IjoiZmVybmFuZG9sZWFubyIsImEiOiJja3Zsb2NlbzIzN3RtMm5xaWdnZWoybWpsIn0.Kz2AC0hNtMUT6uDojPPW3A';

export const Map = () => {

    // To see the map
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.29011, 39.39172],
        zoom: 3,
        });
    });

    return (
        <Wrapper id='map'>

        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div `
    flex-1
`