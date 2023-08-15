import React from 'react'

const CardContent = ({description, onDelete}) => {
  return (
    <div className="content">
      <p>{description}</p>
      <a href="#" type='button' onClick={onDelete}>Dlete Me!!!</a>
    </div>
  )
}

export default CardContent