import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home({ coordinates }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map coordinates={coordinates} />;
}

function Map({ coordinates }) {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: coordinates.latitude, lng: coordinates.longitude }}
      mapContainerClassName="map-container">
      <Marker
        position={{ lat: coordinates.latitude, lng: coordinates.longitude }}
      />
    </GoogleMap>
  );
}
