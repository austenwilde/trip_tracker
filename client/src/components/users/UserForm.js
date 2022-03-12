import { useState, useEffect } from 'react';

const UserForm = ({ addUser, id, name, email, password, updateUser, setEdit }) => {
  const [user, setUser] = useState({ name: '' })


  useEffect( () => {
    if (id) {
   
      setUser({ name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
     
      updateUser(id, user)
      setEdit(false)
    } else {
   
      addUser(user)
    }
    setUser({ name: '' })
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='name' 
          value={user.name} 
          onChange={ (e) => setUser({ ...user, name: e.target.value })} 

          placeholder='Name'
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default UserForm;