import { useState, useEffect } from 'react';

const LocationForm = ({ addLocation, id, name, body, updateLocation, setEdit }) => {
  const [location, setLocation] = useState({ name: '', description: '' })

  useEffect( () => {
    if (id) {
      setLocation({ name, description })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateLocation(id, location)
      setEdit(false)
    } else {
      addLocation(location)
    }
    setLocation({ name: '', description: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name" 
          value={location.name}
          onChange={(e) => setLocation({ ...location, name: e.target.value })}
          required
          placeholder='name'
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={location.description}
          onChange={(e) => setLocation({ ...location, description: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default LocationForm;