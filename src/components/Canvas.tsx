import React, { useState } from 'react'

const rows = 5
const columns = 3


export type CellData = {
    size: number,
    bgcolor: string,
    isRemovedForHole: boolean | null,
    index: number,
    letter: string,

}

const size = 20
function Canvas({ cellsData }: { cellsData: CellData[], holeColor: string }) {
    //dummy data for Cells

    const maxHeight = 500
    const maxWidth = 750
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
        <div style={{ display: "flex", marginTop: "1rem" }}>
            <div style={style}>

                {cellsData.map((cellData) => { return <span><Cell holeColor='black' size={cellData.size} bgcolor={cellData.bgcolor} isRemovedForHole={cellData.isRemovedForHole} index={cellData.index} letter={cellData.letter} /></span> })}
            </div>
        </div>
    )
}

export function Cell({ size = 20, bgcolor = "white", isRemovedForHole, holeColor, letter }: CellData & { holeColor: string }) {
    const [isRemoved, setIsRemoved] = useState<boolean | null>(isRemovedForHole)
    const supportedLetters = ["F", "I", "L", "N", "P", "T", "U", "V", "W", "X", "Y", "Z"]
    const letterColors = [
        "#001fc4",
        "#9c1516",
        "#efee29",
        "#e719e2",
        "#07d4f3",
        "#8a8a8a",
        "#00e53f",
        "#f19a05",
        "#d5d5d5",
        "#2097b8",
        "#b82082",
        "#ff0011",
    ]

    const theBgColorIfLetter = supportedLetters.includes(letter) ? letterColors[supportedLetters.indexOf(letter)] : bgcolor

    return (
        <div style={{
            fontSize: size / 2,
            width: size,
            height: size,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${isRemoved ? "red" : "black"}`,
            backgroundColor: `${isRemoved ? holeColor : theBgColorIfLetter}`
        }} onClick={(e) => setIsRemoved(prev => !prev)}>{letter}</div>
    )
}


export default Canvas