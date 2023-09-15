
import * as React from 'react';
import { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import axios from "axios"
import "./app.css";
// eslint-disable-next-line

import { format } from 'timeago.js';


function App() {
  const currentUser = 'dung';
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [initialViewState, setInitialViewState] = useState({
    longitude: 20.33,
        latitude: 48.87,
        zoom: 4
  })
new
  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, [])

  const handleMarkerClick = (id,lat,long) => {
    setCurrentPlaceId(id);
    setInitialViewState({...initialViewState, latitude: lat, longitude:long })
  }

  const handleAddClick = (e) => {    
    setNewPlace({
      lat: e.lngLat.lat,
      long: e.lngLat.lng,
    })
    
  }


  return (

    <Map
      mapboxAccessToken="pk.eyJ1IjoiZHVuZ2xhbm5pb24iLCJhIjoiY2xtamEwMGFmMDI4bDJrb28xb3kyd3p3eSJ9.ykZDNLOV-S0EEU073d_vgQ"
      initialViewState ={{
        longitude: 20.33,
        latitude: 48.87,
        zoom: 4
      }}

      style={{ width: "100vw", height: "100vh" }}
      // mapStyle="mapbox://styles/mapbox/streets-v9"
      mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
      onDblClick={handleAddClick}
      >

      {pins.map(p =>
        <>
          <Marker longitude={p.long} latitude={p.lat} anchor="bottom" >
            <LocationOnIcon style={{ color: p.username === currentUser ? "tomato" : "slateblue", cursor: 'pointer'}}
              onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
            />
          </Marker>
          {p._id === currentPlaceId &&(
            < Popup 
            latitude={p.lat} 
            longitude={p.long} 
            closeButton={true} 
            closeOnClick={false} 
            onClose={()=>setCurrentPlaceId(null)} 
            anchor="left" >

              <div className='card'>
                <label>Place</label>
                <h4 className='place'>{p.title}</h4>

                <label>Review</label>
                <p className='desc'>{p.description}</p>
                <label>Rating</label>
                <div className='stars'>
                  <StarIcon className='star' />
                  <StarIcon className='star' />
                  <StarIcon className='star' />
                  <StarIcon className='star' />
                  <StarIcon className='star' />
                </div>

                <label>Information</label>
                <span className='username'> Created by <b>{p.username}</b></span>
                <span className='date'>{format(p.createdAt)}</span>
              </div>
            </Popup>  
            
       )}
    </>
  )}
{newPlace && (
  <Popup
    latitude={newPlace.lat}
    longitude={newPlace.long}
    closeButton={true}
    closeOnClick={false}
    onClose={()=>setNewPlace(null)}
    anchor="left"
  >
    hello
  </Popup>
)}

      
    </Map >

  );

}
export default App;
