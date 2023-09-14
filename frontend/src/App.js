
import * as React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
function App() {

  return (

    <Map
      mapboxAccessToken="pk.eyJ1IjoiZHVuZ2xhbm5pb24iLCJhIjoiY2xtamEwMGFmMDI4bDJrb28xb3kyd3p3eSJ9.ykZDNLOV-S0EEU073d_vgQ"
      initialViewState={{
        longitude: 20.33,
        latitude: 48.87,
        zoom: 4
      }}
      style={{ width: "100vw", height: "100vh" }}
      // mapStyle="mapbox://styles/mapbox/streets-v9"
      mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"


    >
      <Marker longitude={2.294694} latitude={48.858093} anchor="bottom" >
        <LocationOnIcon style={{ color: "slateblue" }} />
      </Marker>
      <Popup
        latitude={48.858093}
        longitude={2.294694}
        closeButton={true}
        closeOnClick={false}
        anchor="left" >
        <div className='card'>
          <label>Place</label>
          <h4 className='place'>Eiffel Tower</h4>
          
          <label>Review</label>
          <p>Beautiful place. I recommend it</p>
          <label>Rating</label>
          <div className='stars'>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>

          <label>Information</label>
          <span className='username'> Created by <b>Dung</b></span>
        </div>
      </Popup>
    </Map>

  );

}
export default App;
