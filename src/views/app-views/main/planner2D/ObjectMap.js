import React from "react"
import RenderMap from "./RenderMap"

export default function ObjectMap({ data ,setSelectedObject}) {
  // function mapSizeHandler() {
  //   let result
  // }
  return (
    <div className="planner2d__object" onClick={() => setSelectedObject(data)}>
      <div>{data.name}</div>
      <div>
        <RenderMap renderMap={data.mapSize} />
      </div>
    </div>
  )
}
