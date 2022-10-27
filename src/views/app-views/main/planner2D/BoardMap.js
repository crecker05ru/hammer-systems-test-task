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
      //добавить комманды шагов вправо,влево,вверх,вниз 
      //и фиксацию - tag на каждую точку массива
      // next row
      if(renderedMap[y][x] !== 2 && renderedMap[y][x] !== 0){
        if(selectedObject) {
          let drawMap =[]
          for(let row = 0;row < selectedObject.mapSize.length; row++){
            for(let col = 0;col < selectedObject.mapSize[row].length; col++){
              drawMap.push(renderedMap[+y + row][+x + col])
            }}
          // renderedMap[y][x] = selectedObject.mapSize
          for(let row = 0;row < selectedObject.mapSize.length; row++){
            for(let col = 0;col < selectedObject.mapSize[row].length; col++){
              if(renderedMap[+y + row][+x + col] !== 0 && renderedMap[+y + row][+x + col] !== 2){
                if(selectedObject.mapSize[row][col] > 0) {
                  console.log('drawMap',drawMap)
                  console.log('drawMap.every(cell => cell === 1)',drawMap.every(cell => cell === 1))
                  if(drawMap.every(cell => cell === 1)){
                    renderedMap[+y + row][+x + col] += 1
                  }
                }
              }
            }
          }
        }
      }
    }
    // for(let row = 0;row < currentMap.length; row++){
    //   for(let col = 0;col < currentMap[row].length; col++){
    //     if(renderedMap[row][col] + currentMap[row][col] > 2){
    //       setCurrentMap(currentMap)
    //     } else {
    //       setCurrentMap(renderedMap)
    //     }
    //   }
    // }
    setCurrentMap(renderedMap)
    console.log('renderedMap',renderedMap)
  }
  return (
    <div className='board-map' onClick={ (e) => mapHandler(e)}>{currentMap && <RenderMap  renderMap={currentMap}/>}</div>
  )
}
