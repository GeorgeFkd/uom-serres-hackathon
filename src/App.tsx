import { useState } from 'react'
import Title from './components/Title'
import InputsForCanvas from './components/InputsForCanvas'
import Canvas from './components/Canvas'
import SolveButton from './components/SolveButton'
import DisplaySolution from './components/DisplaySolution'
import BlankCanvas from './components/BlankCanvas'
import ChooseLetters from './components/ChooseLetters'
import ShowSelectedLetters from './components/ShowSelectedLetters'

type CellData = {
  size: number,
  bgcolor: string,
  isRemovedForHole: boolean,
  index: number,
  letter: string,
}

let api_port = "5000"
let api_route = "solve"
function App() {
  const [rows, setRows] = useState(5)
  const [columns, setColumns] = useState(5)
  const [pixels, setPixels] = useState(30)
  const [letterList, setLetterList] = useState<string[]>([])
  const [holes, setHoles] = useState<number[]>([])
  const [result, setResult] = useState<CellData[]>([])
  const handleCellClick = (index: number) => {
    console.log("cell clicked", index)
    if (holes.includes(index)) {
      setHoles(holes.filter((hole) => hole !== index))
    } else {
      setHoles([...holes, index])
    }
  }

  const cellsData: CellData[] = [
    {
      size: pixels,
      bgcolor: "red",
      isRemovedForHole: true,
      index: 0,
      letter: "W"
    },
    {
      size: pixels,
      bgcolor: "red",
      isRemovedForHole: false,
      index: 1,
      letter: "V"
    },
    {
      size: pixels,
      bgcolor: "red",
      isRemovedForHole: true,
      index: 2,
      letter: "N"
    },
    {
      size: pixels,
      bgcolor: "red",
      isRemovedForHole: false,
      index: 3,
      letter: "L"
    },
    {
      size: pixels,
      bgcolor: "red",
      isRemovedForHole: false,
      index: 3,
      letter: "Z"
    },
    {
      size: pixels,
      bgcolor: "red",
      isRemovedForHole: false,
      index: 3,
      letter: "I"
    },
    {
      size: pixels,
      bgcolor: "red",
      isRemovedForHole: false,
      index: 3,
      letter: "T"
    },
  ]

  const sendRequest = async () => {
    console.log("send request")
    // convert index of holes to x,y
    const x_values = holes.map((hole) => hole % columns)
    const y_values = holes.map((hole) => Math.floor(hole / columns))
    if (x_values.length !== y_values.length) {
      throw Error("x_values.length !== y_values.length")
    }
    let holes_coordinates: number[][] = []
    for (let i = 0; i < x_values.length; i++) {
      holes_coordinates.push([x_values[i], y_values[i]])
    }


    // console.log("holes_coordinates", holes_coordinates)
    const data = {
      rows: rows,
      columns: columns,
      letterList: letterList,
      holes
    }

    const response = await fetch("https://api.github.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })

    // console.log("response", response)
    const resultOfSolution = await response.json()
    const dummy = "FFLLΙ YFFLΙ ΥFTLΙ ΥΥTLΙ ΥΤΤΤΙ"
    //convert this to cell data
    const total_result = Array.from(dummy.replace(/ /g, "")).map((letter, index) => {
      return {
        size: pixels,
        bgcolor: "red",
        isRemovedForHole: false,
        index: index,
        letter: letter
      }
    })
    console.log("TOTAL RESULT IS", total_result)

    setResult(total_result)
    // update state with response

    // console.log("data", data)
  }


  return (
    <div style={{ width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "1rem" }}>
      <Title />
      <InputsForCanvas columns={columns} pixels={pixels} rows={rows} setColumns={setColumns} setPixels={setPixels} setRows={setRows} />
      <BlankCanvas cellSize={pixels} colorForHoles='black' columns={columns} rows={rows} handleCellClick={handleCellClick} />
      <ChooseLetters letterList={letterList} setLetterList={setLetterList} />
      <ShowSelectedLetters letterList={letterList} />
      <br />
      <SolveButton onClick={(e) => sendRequest()} />
      <DisplaySolution cellsData={result} columns={columns} rows={rows} />
    </div>
  )
}

export default App
