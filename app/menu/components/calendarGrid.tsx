import React from 'react'
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(weekday)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

interface PropTypes {
  className: string
}

const CalendarGrid = ({ className }: PropTypes) => {
  const startOfWeek = dayjs().weekday(1) // Get the current Monday
  const daysInCalendar = 7 * 4 // 4 weeks * 7 days per week

  const getCalendarDays = () => {
    const days = []
    for (let i = 0; i < daysInCalendar; i++) {
      days.push(startOfWeek.add(i, 'day'))
    }
    return days
  }

  const calendarDays = getCalendarDays()

  return (
    <div className={`${className} w-full h-full p-4 grid grid-cols-7 gap-2`}>
      {calendarDays.map((day, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center border border-gray-300 p-2 rounded-lg"
        >
          <span className="font-bold">{day.format('ddd')}</span>
          <span>{day.format('D')}</span>
        </div>
      ))}
    </div>
  )
}

export default CalendarGrid
