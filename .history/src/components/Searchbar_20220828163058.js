import React from 'react'

const Searchbar = () => {
  return (
    <div className='searchbar-container'>
      <div className='searchbar'>
        <input type="text" placeholder='Search Pokemon'  onChange={onCha}/>
      </div>
    </div>
  )
}

export default Searchbar