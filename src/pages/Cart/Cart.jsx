import React from 'react'
import Butoon from './Butoon'
import '../Cart/Cart.scss'
import { useState, useCallback } from 'react'

function Cart() {
  const [count,setCount]= useState(0)


  const addCount = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  },[])
  const redCount = useCallback(() => {
    setCount(prevCount => prevCount - 1)
  },[])
  


  return (
    <>
    <div className='count1'>
    <h1>{count}</h1>
    <Butoon addCount={addCount}
    redCount={redCount}/>
    </div>

    </>
  )
}

export default Cart
