import React from 'react'

export default function Cell({rowIndex,cellValue,cellIndex}) {
  let addClass = cellValue ? cellValue > 1 ? 'occupied' : 'no-empty'
  : 'empty'

  function cellHandler(e,objectMap) {
    // console.log('e',e)
  }
  return (
    <div className={`map-cell  ${addClass}`} onClick={ (e) => cellHandler(e)} data-row={rowIndex} data-cell-value={cellValue}  data-cell={cellIndex}></div>
  )
}
