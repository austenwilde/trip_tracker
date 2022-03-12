import { useState, useEffect } from 'react';

const AddressForm = ({ addAddress, id, street, state, zip, country, updateAddress, setEdit }) => {
  const [address, setAddress] = useState({ street: '', state: '', zip: '', country: '' })

  useEffect( () => {
    if (id) {
      setAddress({ street, state, zip, country})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAddress(id, address)
      setEdit(false)
    } else {
      addAddress(address)
    }
    setAddress({ street: '', state: '', zip: '', country: '' })
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Country:</label>
        <input 
          name='country'
          value={address.country}
          onChange={(e) => setAddress({...address, country: e.target.value })}
        />
        <label>Message:</label>
        <textarea
          name='street'
          value={address.body}
          onChange={(e) => setAddress({...address, street: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default AddressForm;