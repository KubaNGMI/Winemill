import React, { memo } from 'react'

const Butoon = ({plus,minus}) => {
    console.log('render componetn btn')
  return (
    <div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default memo(Butoon)
