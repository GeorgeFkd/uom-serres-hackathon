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

function DisplaySolution({ cellsData }: { cellsData: CellData[] }) {

    const solution = "FFFFF FFFFF FFFFF FFFFF FFFFF"
    const rows = solution.split(" ").length;
    const columns = solution.split(" ")[0].length;
    const solutionArray = Array.from(solution.replace(/ /g, ""))
    const maxHeight = 500
    const maxWidth = 750
    console.log(solutionArray)
    const style = {
        display: 'grid',
        gridAutoColumns: "max-content",
        gap: 0,
        gridAutoRows: "max-content",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        maxHeight: maxHeight,
        maxWidth: maxWidth
    };



    return (
        <div style={style}><Canvas cellsData={cellsData} holeColor='yellow' /></div>
    )
}

export default DisplaySolution