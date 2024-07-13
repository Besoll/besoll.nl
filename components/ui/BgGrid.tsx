import React from 'react'

const BgGrid = () => {
  return (
    <div className="h-full w-full bg-black-100 bg-grid-white/[0.03] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  )
}

export default BgGrid