import React from 'react'
import Cell from './Cell'

export default function Row({row,rowIndex}) {

  return (
    <div className='map-row' data-row-index={rowIndex}>{row.map((cell,index) => <Cell cellValue={cell} cellIndex={index} rowIndex={rowIndex}/>)}</div>
  )
}
