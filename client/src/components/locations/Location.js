import { useState } from 'react';
import LocationForm from './LocationForm';
import { Link } from 'react-router-dom';

const Location = ({ id, name, description, fav, updateLocation, deleteLocation }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      {
        editing ?
          <>
            <LocationForm
              id={id}
              name={name}
              description={description}
              updateLocation={updateLocation}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        :
        <>
          <h1>name: {name}</h1>
          <p>{description}</p>
          <p>Favorite: {fav ? "☆ favorite" : "x not favorite"}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteLocation(id)}>Delete</button>
          <Link to={`/locations/${id}/addresses`}>
            <button>
              go to Addresses
            </button>
          </Link>
        </>
      }
    </>
  )
}

export default Location;