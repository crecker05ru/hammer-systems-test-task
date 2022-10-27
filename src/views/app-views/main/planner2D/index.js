import React from "react"
import Objects from "./Objects"
import BoardMap from "./BoardMap"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

export default function Planner2D() {
  const [selectedObject, setSelectedObject] = React.useState()
  const onDragEnd = () => {
    console.log()
  }
  return (
    <div className="planner2d">
      Planner2D
      <div>
        <DragDropContext>
          <div>
            <Droppable droppableId="board">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  drop
                  <Objects
                    setSelectedObject={setSelectedObject}
                    selectedObject={selectedObject}
                    provided={provided}
                  />

                  <BoardMap selectedObject={selectedObject} />
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  )
}
