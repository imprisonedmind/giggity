"use client"
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const options = {
  styles: [
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [
        {invert_lightness: 'true'},
        {saturation: 10},
        {lightness: 10},
        {gamma: 0.9},
        {hue: 'rgba(24,24,24,0.5)'},
      ],
    },
  ],
  disableDefaultUI: true,
};

const apikey = process.env.GOOGLE_MAPS_API_KEY || ''


export default function Map({location}) {

  return <LoadScript googleMapsApiKey={apikey}>
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
        options={options}
    >
      <Marker position={center}>
        <div className={"h-4 w-4 bg-red-500"}/>
      </Marker>
    </GoogleMap>
  </LoadScript>
}