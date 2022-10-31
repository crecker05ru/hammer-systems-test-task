import React from "react"
import ObjectMap from "./ObjectMap"
import { tableObjects } from "../../../../assets/planner/items/tables"
import { Draggable } from "react-beautiful-dnd"

export default function Objects({
  selectedObject,
  setSelectedObject,
  provided,
}) {
  const [tables, setTables] = React.useState(tableObjects)
  const [currentObject, setCurrentObject] = React.useState()

  // function setCurrentObjectHandler(data) {
  //   setCurrentObject(data)
  //   console.log('data',data)
  // }
  return (
    <div className="planner2d__objects">
      <div className="objects__container">
        <ul className="objects__list">
          {tables &&
            tables.map((table, index) => (
              // <Draggable draggableId={table.name} index={index}>
              //   {dragProvided => (
                    <li               
                    // {...dragProvided.dragHandleProps}
                    // {...dragProvided.draggableProps}
                    // ref={dragProvided.innerRef}
                    >
                      <ObjectMap
                        data={table}
                        setSelectedObject={setSelectedObject}
                        selectedObject={selectedObject}
                        tableIndex={index}
                        // provided={provided}
                      />
                      {/* {provided.placeholder} */}
                    </li>
              //   )}

            
              // </Draggable>
            ))}
            
        </ul>
      </div>
    </div>
  )
}
