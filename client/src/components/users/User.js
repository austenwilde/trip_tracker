import { useState } from 'react';
import UserForm from './UserForm';
import Trips from '../trips/Trips';
import Locations from '../locations/Locations'
import { Link } from 'react-router-dom';

const User = ({ id, name, email, password, updateUser, deleteUser }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h1 style={{ color: 'teal', fontSize: '34px' }}>{name}</h1>
      {
        editing ?
        <>
          <UserForm 
            id={id}
            name={name}
            email={email}
            password={password}
            updateUser={updateUser}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button 
            onClick={() => setEdit(true)}
            style={styles.btn}
          >
            Edit
          </button>
          <button 
            onClick={() => deleteUser(id)}
            style={styles.deleteBtn}
          >
            Delete
          </button>
          <Link 
            to={`/users/${id}/trips`}
            state={{ userId: id, userName: name }}
          >
            Topics
          </Link>
        </>
      }
    </>
  )
}

const styles = {
  btn: {
    background: 'yellow',
    color: 'orange',
    fontSize: '12px',
    borderRadius: '10px',
  },
  deleteBtn: {
    background: 'red',
    color: 'white',
    fontSize: '12px',
    borderRadius: '5px',
  }
}

export default User;