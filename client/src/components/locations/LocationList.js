import Location from './Location';

const LocationList = ({ locations, updateLocation, deleteLocation }) => (
  <>
    { locations.map( t => 
      <Location 
        key={t.id}
        {...t}
        fav={false}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}
      />
    )}
  </>
)

export default LocationList;