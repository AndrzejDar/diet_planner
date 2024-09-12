import React from 'react'
import CalendarGrid from './components/calendarGrid'
import Drawer from './components/drawer'
import MenuLayout from './layout'

const MenuPage = () => {
  return (
    <div className="flex flex-row">
      <CalendarGrid className="width-[calc(100% - 200px)]" />
      <Drawer className="width-[200px]" />
    </div>
  )
}

export default MenuPage
