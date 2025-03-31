import React, { memo } from 'react'

const Butoon =  ({ addCount,redCount}) => {
    console.log('render componetn btn')

    
  return (
    <div>
      <button onClick={addCount}>+</button>
      <button onClick={redCount}>-</button>

    </div>
  )
}

export default memo(Butoon) 
