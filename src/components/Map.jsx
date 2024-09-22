import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';

function MapComponent() {
  const position = {lat: 53.54992, lng: 10.00678};

  return (
    <APIProvider apiKey={'AIzaSyDCzzasVPDukgwNeWVDKnRUqsjUgGJDWCg'}>
      <Map defaultCenter={position} defaultZoom={10} mapId='map'>
        <AdvancedMarker position={position} />
      </Map>
    </APIProvider>
  );
}

export default MapComponent;