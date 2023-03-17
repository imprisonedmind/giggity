"use client"
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};


const options = {
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{visibility: 'on'}],
    },
    {
      featureType: 'transit',
      elementType: 'labels',
      stylers: [{visibility: 'off'}],
    },
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [
        {invert_lightness: true},
        {saturation: 10},
        {lightness: 10},
        {gamma: 0.9},
        {hue: 'rgba(24,24,24,0.5)'},
      ],
    },
  ],
  disableDefaultUI: true,
};


export default function Map({latLong, apikey}) {

  return <div className={"col-span-1 rounded-lg overflow-hidden border border-1" +
      " border-neutral-700 "}>
    <LoadScript googleMapsApiKey={apikey}>
      <GoogleMap
          mapContainerStyle={containerStyle}
          center={latLong}
          zoom={18}
          options={options}
      >
        <Marker position={latLong} title={"test test test"}>
        </Marker>
      </GoogleMap>
    </LoadScript>
  </div>
}