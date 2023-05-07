import { useState } from 'react'
import Title from './components/Title'
import InputsForCanvas from './components/InputsForCanvas'
import Canvas from './components/Canvas'
import SolveButton from './components/SolveButton'
import DisplaySolution from './components/DisplaySolution'
import BlankCanvas from './components/BlankCanvas'
import ChooseLetters from './components/ChooseLetters'

type CellData = {
  size: number,
  bgcolor: string,
  isRemovedForHole: boolean,
  index: number,
  letter: string,
}


function App() {
  const [rows, setRows] = useState(5)
  const [columns, setColumns] = useState(5)
  const [pixels, setPixels] = useState(30)
  const [letterList, setLetterList] = useState<string[]>([])
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

  const sendRequest = () => {
    console.log("send request")
  }


  return (
    <div style={{ width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "1rem" }}>
      <Title />
      <InputsForCanvas columns={columns} pixels={pixels} rows={rows} setColumns={setColumns} setPixels={setPixels} setRows={setRows} />
      <BlankCanvas cellSize={pixels} colorForHoles='black' columns={columns} rows={rows} />
      <ChooseLetters letterList={letterList} setLetterList={setLetterList} />
      <SolveButton onClick={(e) => sendRequest()} />
      <DisplaySolution cellsData={cellsData} />
    </div>
  )
}

export default App
