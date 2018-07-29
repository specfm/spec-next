const moment = require('moment')
const simplecast = require('./simplecast')

const getStats = async (url) => {
  // url comes in as /stats/{range}
  const parsed = url.split('/')
  // ['', 'stats', {range}]
  const range = parsed.length === 3 && parsed[2]
  // invalid url
  if (!range) return null

  const podcasts = await simplecast('/podcasts.json')
  const ids = podcasts.map(podcast => podcast.id)

  const rangeToDays = {
    all: 2000,
    week: 7,
    month: 30,
    year: 365
  }
  
  // start with the previous day
  const currentPeriodEnd = 1
  const currentPeriodStart = rangeToDays[range]
  const prevPeriodEnd = currentPeriodStart + 1
  const prevPeriodStart = currentPeriodStart * 2

  const getDate = (num) => moment().subtract(num, 'days').format("YYYY-MM-DD")

  // format date strings based on the range
  const currentPeriodEndDate = getDate(currentPeriodEnd)
  const currentPeriodStartDate = getDate(currentPeriodStart)
  const prevPeriodEndDate = getDate(prevPeriodEnd)
  const prevPeriodStartDate = getDate(prevPeriodStart)

  const statsPromises = ids.map(async id => {
    const [
      current,
      previous
    ] = await Promise.all([
      simplecast(`/podcasts/${id}/statistics/overall.json?start_date=${currentPeriodStartDate}&end_date=${currentPeriodEndDate}&timeframe=custom`),
      simplecast(`/podcasts/${id}/statistics/overall.json?start_date=${prevPeriodStartDate}&end_date=${prevPeriodEndDate}&timeframe=custom`)
    ])

    return {
      id,
      totals: {
        current: current.total_listens,
        previous: previous.total_listens,
      }
    }
  })

  return Promise.all(statsPromises)
}

module.exports = getStats