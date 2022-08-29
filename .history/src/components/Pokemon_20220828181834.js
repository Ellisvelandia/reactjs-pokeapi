import React from 'react'

const Pokemon = (props) => {
  const (pokemon) = props
  console.log("pokemon", pokemon)
  return (
    <div>
      {pokemon}
    </div>
  )
}

export default Pokemon