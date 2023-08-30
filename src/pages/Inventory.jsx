import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Inventory = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const loggedUser = location.state.loggedUser


  return (
    <div>Inventory</div>
  )
}

export default Inventory