import React from 'react'
import Objects from './Objects'
import BoardMap from './BoardMap'


export default function Planner2D() {
  const [selectedObject,setSelectedObject] = React.useState()
  return (
    <div className='planner2d'>Planner2D 
      <div>
        <Objects setSelectedObject={setSelectedObject}/>
        <BoardMap selectedObject={selectedObject}/>
      </div>
      </div>
  )
}
