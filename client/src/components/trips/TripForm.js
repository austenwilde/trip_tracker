import { useState, useEffect } from 'react';

const TripForm = ({ addTrip, id, name, description, updateTrip, setEdit }) => {
  const [trip, setTrip] = useState({ name: '', description: '' })

  useEffect( () => {
    if (id) {
      setTrip{ name, description })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTrip(id, trip)
      setEdit(false)
    } else {
      addTrip(trip)
    }
    setTrip({ name: '', description: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name" 
          value={trip.name}
          onChange={(e) => setTrip({ ...trip, name: e.target.value })}
          required
          placeholder='name'
        />
        <label>Body:</label>
        <textarea
          name="body"
          value={trip.body}
          onChange={(e) => setTrip({ ...trip, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TripForm;