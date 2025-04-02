import React from 'react'
import ProductShow from '../components/ProductShow'
import OrderCta from '../components/OrderCta'
import OrderFormModal from '../components/OrderFormModal'

const Shopping = ({openModal, isModalOpen, closeModal}) => {
  return (
    <>
      <ProductShow />
      <OrderFormModal isOpen={isModalOpen} closeModal={closeModal} />
      <OrderCta openModal={openModal} />

    </>
  )
}

export default Shopping
