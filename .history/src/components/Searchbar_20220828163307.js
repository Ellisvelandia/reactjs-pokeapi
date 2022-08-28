import React, {useState} from "react";

const Searchbar = (props) => {
  
  return (
    <div className='searchbar-container'>
      <div className='searchbar'>
        <input type="text" placeholder='Search Pokemon'  onChange={onChange}/>
      </div>
      <div className="searchbar-btn">
                <button onClick={onButtonClickHandler} >Buscar</button>
            </div>
    </div>
  )
}

export default Searchbar