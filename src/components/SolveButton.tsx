import React from 'react'

function SolveButton({ onClick }: { onClick: (e: any) => void }) {
  return (
    <button onClick={onClick}>SolveButton</button>
  )
}

export default SolveButton