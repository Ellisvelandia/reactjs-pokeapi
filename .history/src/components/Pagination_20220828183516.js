import React from 'react'

const Pagination = (props) => {
  const {page, totlaPages, onLeftClick, onRightClick} = props
  return (
    <div className='pagination-container'>
 <button onClick={onLeftClick}><div>◀️</div></button>
 <div>{page} of {totalPages}</div>
 <button onClick={onLRightClick}><div>◀️</div></button>

    </div>
  )
}

export default Pagination