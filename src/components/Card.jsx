import React , {useState} from 'react'
import CardHeader from './cardHeader'
import CardContent from './cardContent'
const Card = ({title , description , onDelete}) => {
  return (
      <div className="card">
        <div className="face face1">
            <CardHeader title={title}/>
        </div>

        <div className="face face2">
            <CardContent description={description} onDelete={onDelete}/>
        </div>
      </div>
  )
}

export default Card