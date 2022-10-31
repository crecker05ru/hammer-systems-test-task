import React from "react"
import RenderMap from "./RenderMap"
import { Draggable } from "react-beautiful-dnd"
export default function ObjectMap({
  data,
  tableIndex,
  selectedObject,
  setSelectedObject,
}) {
  // function mapSizeHandler() {
  //   let result
  // }
  function dragStartHandler(e) {
    setSelectedObject(data)
    console.log('Object dragStartHandler e',e)
  }
  function dragOverHandler(e) {
    e.preventDefault()
    console.log('Object dragOverHandle e',e)
  }
  function dropHandler(e) {
    e.preventDefault()
    console.log('Object dropHandler e',e)
  }

  let addedClass = data.name === selectedObject?.name ? "selected" : ""
  return (
    <div className="planner2d__object" onClick={() => setSelectedObject(data)}>
      <div>{data.name}</div>
      <div className={`planner2d__object-map ${addedClass}`} draggable={true}  onDragStart={(e) => dragStartHandler(e)} onDragOver={(e) => dragOverHandler(e)} onDrop={ (e) => dropHandler(e)}>
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
