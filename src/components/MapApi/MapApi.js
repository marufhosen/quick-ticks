import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "600px",
  padding: "30px",
};

const center = {
  lat: 23.8103,
  lng: 90.4125,
};

const MapApi = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyBYQG4MNBAE0N5ELMeg9-aUp7ZxrdAr43k">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(MapApi);
