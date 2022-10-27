import React from "react"
import RenderMap from "./RenderMap"
import { Draggable } from "react-beautiful-dnd"
export default function ObjectMap({
  data,
  tableIndex,
  selectedObject,
  setSelectedObject,
  provided
}) {
  // function mapSizeHandler() {
  //   let result
  // }
  let addedClass = data.name === selectedObject?.name ? "selected" : ""
  return (
    <div className="planner2d__object" onClick={() => setSelectedObject(data)}>
      <div>{data.name}</div>
      <div className={`planner2d__object-map ${addedClass}`}>
      <RenderMap renderMap={data.mapSize} />
        {/* <Draggable draggableId={data.name} index={tableIndex}>
          
          {(dragProvided) => (
            <div
              {...dragProvided.dragHandleProps}
              {...dragProvided.draggableProps}
              ref={dragProvided.innerRef}
            >
              

            </div>
            
          )}
        </Draggable> */}

      </div>
    </div>
  )
}
