import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'
function MapDashhboard(props) {
    const [location,setLocation] = useState()
    useEffect(()=>{
        if(props.location !== "")
        {   const name = props.location
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch('http://127.0.0.1:8000/api/location?location='+name, requestOptions)
                .then(response => response.text())
                .then(result => setLocation(JSON.parse(result)))
                .catch(error => console.log('error', error));

        }
    },[props.location])
    
    return (<div>
            {!!location ? <MapContainer center={[ location.lattitude,location.longitude]} zoom={30}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[location.lattitude,location.longitude]}>
                </Marker>
            </MapContainer>
            :
            <MapContainer center={[0, 0]} zoom={1}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
            </MapContainer> 
        }
            </div>
    )
}

export default MapDashhboard
