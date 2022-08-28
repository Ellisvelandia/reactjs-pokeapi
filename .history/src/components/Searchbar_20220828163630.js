import React, {useState} from "react";

const Searchbar = (props) => {
  const [search, setSearch] = useState("dito")
  const {onSearch} = props
  const onChangeHandler = (e) => {{
    setSearch(e.target.value)
    if (e.target.value.length === 0) {
      onSerach(undefined)
    }
  }

const onButtonClickHandler = () {
  onSearch(search)
}
}

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