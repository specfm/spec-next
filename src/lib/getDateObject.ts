interface DateObject {
  month: string
  day: number
  year: number
  hour: number
}

export const getDateObject = (timestamp: string): DateObject => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date = new Date(timestamp)
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const month = monthNames[monthIndex]
  const year = date.getFullYear()
  const hours = date.getHours() || 0
  let hour
  if (hours === 0) {
    hour = 12
  } else {
    hour = hours > 12 ? hours - 12 : hours
  }

  return {
    month,
    day,
    year,
    hour,
  }
}
