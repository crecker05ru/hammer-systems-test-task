import React from "react"
import RenderMap from "./RenderMap"
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload,Input } from 'antd';
import { defaultMap } from "../../../../assets/planner/map/defaultMap"

export default function BoardMap({ selectedObject }) {
  const [file, setFile] = React.useState()
  const [currentMap, setCurrentMap] = React.useState(
    JSON.parse(JSON.stringify(defaultMap))
  )
  const [prerenderMap, setPrerenderMap] = React.useState(currentMap)
  const [renderCount, setRenderCount] = React.useState(0)
  const fileReader = new FileReader()

  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
    console.log('e',e)
  }
  const saveMap = () => {
    const fileData = JSON.stringify(currentMap)
    const blob = new Blob([fileData], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = "exported-map.json"
    link.href = url
    link.click()
  }

  const importMap = (e) => {
    e.preventDefault()

    if (file) {
      fileReader.onload = function (event) {
        const jsonFile = event.target.result
        console.log('jsonFile',jsonFile)
        const parsedJson =  JSON.parse(jsonFile)
        setPrerenderMap(null)
        setFile(parsedJson)
        setCurrentMap(parsedJson)
        setPrerenderMap(parsedJson)
      }

      fileReader.readAsText(file)
      console.log('file',file)
    }
  }
  function dragStartHandler(e) {
    console.log("Board dragStartHandler e", e)
  }

  function dragOverHandler(e) {
    e.preventDefault()
    // setTimeout(() => {
    //   prerenderBoard(e)
    // }, 300);
    // setPrerenderMap(defaultMap)
    // setCurrentMap(defaultMap)
    // setPrerenderMap(defaultMap)
    prerenderBoard(e)

    // setCurrentMap(defaultMap)
    // setPrerenderMap(defaultMap)
    // setCurrentMap(defaultMap)

    // setRenderCount(renderCount + 1)
    // console.log('renderCount',renderCount)
    console.log("Board dragOverHandle e", e)
  }
  const dragLeaveHandler = (e) => {
    if (e.target.dataset && e.target.dataset.row) {
      let y = e.target.dataset.row
      let x = e.target.dataset.cell
      e.target.classList.remove("point", "denied")
      // console.log('e.target',e.target.classList.toggle("point"))
    }
  }

  function dropHandler(e) {
    e.preventDefault()

    mapHandler(e)
    console.log("Board dropHandler e", e)
  }
  function mapHandler(e) {
    console.log("e", e)
    console.log("selectedObject", selectedObject)
    let renderedMap = [...currentMap]
    if (e.target.dataset && e.target.dataset.row) {
      let y = e.target.dataset.row
      let x = e.target.dataset.cell
      e.target.classList.remove("point", "denied")
      // renderedMap[y][x] = 2
      //добавить комманды шагов вправо,влево,вверх,вниз
      //и фиксацию - tag на каждую точку массива
      // next row
      if (renderedMap[y][x] !== 2 && renderedMap[y][x] !== 0) {
        if (selectedObject) {
          let drawMap = []
          for (let row = 0; row < selectedObject.mapSize.length; row++) {
            for (let col = 0; col < selectedObject.mapSize[row].length; col++) {
              drawMap.push(renderedMap[+y + row][+x + col])
            }
          }
          // renderedMap[y][x] = selectedObject.mapSize
          for (let row = 0; row < selectedObject.mapSize.length; row++) {
            for (let col = 0; col < selectedObject.mapSize[row].length; col++) {
              if (
                renderedMap[+y + row][+x + col] !== 0 &&
                renderedMap[+y + row][+x + col] !== 2
              ) {
                if (selectedObject.mapSize[row][col] > 0) {
                  console.log("drawMap", drawMap)
                  console.log(
                    "drawMap.every(cell => cell === 1)",
                    drawMap.every((cell) => cell === 1)
                  )
                  if (drawMap.every((cell) => cell === 1)) {
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
    console.log("renderedMap", renderedMap)
  }

  React.useEffect(() => {
    console.log("useEffect")
    console.log("defaultMap",defaultMap)
    console.log("prerenderMap",prerenderMap)
    console.log("currentMap",currentMap)
    console.log('file',file)
  },[file,currentMap])
  function prerenderBoard(e) {
    console.log("e", e)
    if (e.target.dataset && e.target.dataset.row) {
      let y = e.target.dataset.row
      let x = e.target.dataset.cell
      // e.target.classList.add("point")
      if (currentMap[y][x] !== 2 && currentMap[y][x] !== 0) {
        e.target.classList.add("point")
      } else {
        e.target.classList.add("denied")
      }
    }
  }

  return (
    <div className="board-map" onClick={(e) => mapHandler(e)}>
      {prerenderMap && (
        <div
          draggable={false}
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragStart={(e) => dragStartHandler(e)}
          onDrop={(e) => dropHandler(e)}
        >
          <RenderMap renderMap={prerenderMap} />
        </div>
      )}
      <Button onClick={saveMap} type="primary">
        Сохранить
      </Button>
      {/* <input
        type="file"
        id={"jsonInput"}
        accept={".json"}
        onChange={handleFileInput}
      /> */}
                  <Button onClick={(e) => importMap(e)} type="warning">
        Импортировать
      </Button>
      <Input placeholder="coose file" type="file" accept=".json" onChange={handleFileInput} id={"jsonInput"}/>


        {/* <Upload {...props}>
    <Button icon={<UploadOutlined />}>Импортировать</Button>
  </Upload> */}

    </div>
  )
}

// const props: UploadProps = {
//   name: 'file',
//   accept: ".json",
//   action: '/',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   // beforeUpload: file => {
//   //   const isJSON = file.type === 'application/json';
//   //   if (!isJSON) {
//   //     message.error(`${file.name} is not a json file`);
//   //   }
//   //   return isJSON || Upload.LIST_IGNORE;
//   // },
//   onChange(info) {
//     // if (info.file.status !== 'uploading') {
//     //   console.log(info.file, info.fileList);
//     // }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// }