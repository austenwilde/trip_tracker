import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddressForm from './AddressForm';
import AddressList from './AddressList';

const Addresses = () => {
  const { locationId } = useParams()
  const [addresses, setAddresses] = useState([])

  useEffect( () => {
    axios.get(`/api/locations/${locationsId}/addresses`)
      .then( res => setAddresses(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addAddress = (address) => {
    axios.post(`/api/locations/${locationsId}/addresses`, { address })
      .then( res => setAddresses([...addresses, res.data]))
      .catch( err => console.log(err) )
  }

  const updateAddress = (id, address) => {
    axios.put(`/api/locations/${locationsId}/addresses/${id}`, { address })
      .then( res => {
        const newUpdatedAddresses= addresses.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setAddresses(newUpdatedAddresses)
      })
      .catch( err => console.log(err) )
  }

  const deleteAddress = (id) => {
    axios.delete(`/api/locations/${locationsId}/addresses/${id}`)
      .then( res => {
        setAddresses(addresses.filter( c => c.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>Addresses</h1>
      <AddressForm addAddress={addAddress} />
      <AddressList 
        addresses={addresses} 
        updateAddress={updateAddress}
        deleteAddress={deleteAddress}
      />
    </>
  )
}

export default Addresses;