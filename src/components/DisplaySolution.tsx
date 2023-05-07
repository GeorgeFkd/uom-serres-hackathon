import React from 'react'
import Canvas from './Canvas';

type CellData = {
    size: number,
    bgcolor: string,
    isRemovedForHole: boolean,
    index: number,
    letter: string,
}
const size = 20;

function DisplaySolution({ cellsData, rows, columns }: { cellsData: CellData[], rows: number, columns: number }) {

    const solution = "FFFFF FFFFF FFFFF FFFFF FFFFF"

    const solutionArray = Array.from(solution.replace(/ /g, ""))
    const maxHeight = 500
    const maxWidth = 750
    console.log("HERE", rows, columns)
    // const style = {
    //     display: 'grid',
    //     // gridAutoColumns: "max-content",
    //     gap: 0,
    //     // gridAutoRows: "max-content",
    //     gridTemplateColumns: `repeat(${columns}, 1fr)`,
    //     gridTemplateRows: `repeat(${rows}, 1fr)`,

    // };



    return (
        <div style={{ padding: "1rem" }}><Canvas cellsData={cellsData} holeColor='yellow' handleCellClick={(e) => console.log("nothing")} columns={columns} rows={rows} /></div >
    )
}

export default DisplaySolution