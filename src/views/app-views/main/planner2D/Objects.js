import React from 'react'
import ObjectMap from './ObjectMap'
import {tableObjects} from '../../../../assets/planner/items/tables'

export default function Objects({setSelectedObject}) {
  const [tables, setTables] = React.useState(tableObjects)
  const [currentObject,setCurrentObject] = React.useState()

  // function setCurrentObjectHandler(data) {
  //   setCurrentObject(data)
  //   console.log('data',data)
  // }
  return (
    <div className='planner2d__objects'>
      <div className="objects__container">
        <ul className="objects__list">
          {tables && tables.map((table, index) => <li ><ObjectMap data={table} setSelectedObject={setSelectedObject}/></li>)}
        </ul>
      </div>
    </div>
  )
}
