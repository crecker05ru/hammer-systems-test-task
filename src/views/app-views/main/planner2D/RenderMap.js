import React from 'react'
import Cell from './Cell'
import Row from './Row'

export default function RenderMap({renderMap}) {
  const [map] = React.useState(renderMap)
  return (
    <div className='planner2d-map'>
      <ul className='planner2d-map__list'>
        {map && map.map((row,index) => <li className='planner2d-map__cell'><Row  row={row} rowIndex={index}/></li>
          )}
      </ul>
    </div>
  )
}
