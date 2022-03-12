import { useState } from 'react';
import TripForm from './TripForm';
import { Link } from 'react-router-dom';

const Trip = ({ id, name, description, fav, updateTrip, deleteTrip }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      {
        editing ?
          <>
            <TripForm
              id={id}
              name={name}
              description={description}
              updateTrip={updateTrip}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        :
        <>
          <h1>Name: {name}</h1>
          <p>{body}</p>
          <p>Favorite: {fav ? "☆ favorite" : "x not favorite"}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteTrip(id)}>Delete</button>
          <Link to={`/trips/${id}/locations`}>
            <button>
              go to Locations
            </button>
          </Link>
        </>
      }
    </>
  )
}

export default Location;