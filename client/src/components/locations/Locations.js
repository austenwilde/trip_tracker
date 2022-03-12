import { useState, useEffect } from 'react';
import axios from 'axios';
import LocationForm from './LocationForm';
import LocationList from './LocationList';
import { useLocation, useParams } from 'react-router-dom';

const Locations = ({}) => {
  const [locations, setLocations] = useState([])
  const location = useLocation();
  const { tripId, tripName } = location.state

  useEffect( () => {
    axios.get(`/api/trips/${tripId}/locations`)
      .then( res => setLocations(res.data) )
      .catch( err => console.log(err))
  }, [])

  const addLocation = (location) => {
    axios.post(`/api/trips/${tripId}/locations`, { location })
    .then( res => setLocations([...locations, res.data]) )
    .catch( err => console.log(err))
  }

  const updateLocation = (id, location) => {
    axios.put(`/api/trips/${tripId}/locations/${id}`, { location })
      .then( res => {
        const newUpdatedLocations = loacations.map( t => {
          if (t.id === id) {
            return res.data 
          }
          return t
        })
        setLocations(newUpdatedLocations)
      })
      .catch( err => console.log(err))
  }

  const deleteLocation = (id) => {
    axios.delete(`/api/trips/${tripId}/locations/${id}`)
      .then( res => {
        setLocations( locations.filter( t => t.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Trip: {tripName</h1>
      <h3>Locations</h3>
      <LocationForm addLocation={addLocation} />
      <LocationList
        locations={locations}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}
      />
    </>
  )
}

export default Locations;