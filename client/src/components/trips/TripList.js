import Trip from './Trip';

const TripList = ({ trips, updateTrip, deleteTrip }) => (
  <>
    { trips.map( t => 
      <Trip
        key={t.id}
        {...t}
        fav={false}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}
      />
    )}
  </>
)

export default TripList;