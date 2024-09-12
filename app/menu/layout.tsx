import React, { ReactNode } from 'react'

interface PropTypes {
  children: ReactNode
}

const MenuLayout = ({ children }: PropTypes) => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="w-[120px] bg-gray-200/20">Side menu</div>
      <div className="flex-grow">
        <div className="h-[80px] bg-gray-200/40">Top menu</div>
        {children}
      </div>
    </div>
  )
}

export default MenuLayout
