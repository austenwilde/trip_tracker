import { useState } from 'react';
import AddressForm from './AddressForm';

const Address = ({ id, street, state, zip, country, updateAddress, deleteAddress }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>  
            <AddressForm 
              id={id}
              street={street}
              state={state}
              zip={zip}
              counrty={counrty}
              updateAddress={updateAddress}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        : 
        <>
          <h1>Street: {street}</h1>
          <h1>State: {state}</h1>
          <h1>Zip: {zip}</h1>
          <h1>Country: {country}</h1>
          
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteAddress(id)}>Delete</button>
        </>
      }
      
    </>
  )
}

export default Address;