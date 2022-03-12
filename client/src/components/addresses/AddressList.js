import Location from './Location';

const LocationList = ({ locations, updateLocation, deleteLocation }) => (
  <>
    { locations.map( c => 
      <Location 
        key={c.id}
        {...c}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}
      />
    )}
  </>
)

export default LocationList;