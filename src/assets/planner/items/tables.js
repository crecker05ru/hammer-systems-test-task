
export const tableTwoPersons = {
  id: 1,
  name: 'Table for two persons',
  image: '',
  mapSize: [[1,1,1]],
  mapSizeVertical: [[1],[1],[1]]
}

  // mapInsructions: (center) =>  {
  //   center[y][x] + 1
  //   center[y][x] - 1
  //   if(mapSizeVertical) {
  //     center[y] + 1
  //     center[y] - 1
  //   }
  // },

export const tableFivePersons = {
  id: 2,
  name: 'Table for five persons',
  image: '',
  mapSize: [
    [1,1,1],
    [1,1,1],
    [0,1,0]
],
  mapSizeVertical: [
    [1,1,0],
    [1,1,1],
    [1,1,0]
  ]
}

  // mapInsructions: (center) =>  {
  //   center[y][x] + 1
  //   center[y][x] - 1
  //   center[y + 1][x] + 1
  //   center[y + 1][x] - 1
  //   center[y + 2][x]
  //   if(mapSizeVertical) {
  //     center[y] + 1
  //     center[y] - 1
  //   }
  // },

export const tableObjects = [
  tableTwoPersons,
  tableFivePersons
]