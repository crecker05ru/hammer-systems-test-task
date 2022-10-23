import React from 'react'
import RenderMap from './RenderMap'
import {defaultMap} from '../../../../assets/planner/map/defaultMap'
export default function BoardMap({selectedObject}) {
  const [currentMap, setCurrentMap] = React.useState(defaultMap)
  function mapHandler(e) {
    console.log('e',e)
    console.log('selectedObject',selectedObject)
    let renderedMap = [...currentMap]
    if(e.target.dataset && e.target.dataset.row) {
      let y = e.target.dataset.row
      let x = e.target.dataset.cell
      // renderedMap[y][x] = 2
      //добавить комманды шагов вправо,влево,вверх,вниз и фиксацию - tag на каждую точку массива
      if(selectedObject) {
        renderedMap[y][x] = selectedObject.mapSize
      }
    }
    setCurrentMap(renderedMap)
    console.log('renderedMap',renderedMap)
  }
  return (
    <div className='board-map' onClick={ (e) => mapHandler(e)}>{currentMap && <RenderMap  renderMap={currentMap}/>}</div>
  )
}
