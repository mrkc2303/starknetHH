import React from 'react';
import FetchNFT from '../components/FetchNFT'
import Header from '../components/Header'
import Inventory from '../components/Inventory'

const Marketplace = () => {
  return (
    <div>
    
      <Header />
      <FetchNFT />
      <Inventory />
    </div>
  )
}

export default Marketplace
