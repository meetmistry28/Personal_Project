import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../admin/products/Product'

export default function Adminroutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/products/*" element={<Product />} />
      </Routes>
    </div>
  )
}
