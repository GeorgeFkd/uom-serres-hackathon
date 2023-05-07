import React from 'react'

function SolveButton({ onClick }: { onClick: (e: any) => void }) {
  return (
    <button onClick={onClick} style={{ marginTop: "1rem" }}>SolveButton</button>
  )
}

export default SolveButton