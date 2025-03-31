import React, { useState ,useCallback } from 'react'
import './Cart.scss'
import Butoon from './Butoon'


const App = () => {
  const [count,setCount]= useState(0)
 const plus = useCallback (()=>{
  setCount(prevCount => prevCount + 1);
 },[])
 const minus = useCallback (()=>{
  setCount(prevCount => prevCount - 1);
 },[])
  return (
    <div>
    <h1>{count}</h1>
    <Butoon plus ={plus} minus ={minus}/>
    </div>
  )
}

export default App