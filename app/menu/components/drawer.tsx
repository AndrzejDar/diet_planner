import React from 'react'

interface PropTypes {
  className: string
}

const Drawer = ({ className }: PropTypes) => {
  return <div className={`${className} width-[200px] bg-gray`}>Drawer</div>
}

export default Drawer
