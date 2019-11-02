import moment from 'moment'
import microCors from 'micro-cors'
import fetch from 'isomorphic-unfetch'
import simplecast from '../../lib/simplecast'

const cors = microCors();

const prod = process.env.NODE_ENV === 'production';
const API_URL = prod ? 'https://spec.fm/api' : 'http://localhost:3000/api';

const fetchData = async (route) => {
  const req = fetch(`${API_URL}/${route}`);
  const res = await req;
  return await res.json();
}

const getStats = async range => {
  if (!range) return null;
  const podcasts= await fetchData('podcasts')

  const ids = podcasts.map(podcast => podcast.id);

  const rangeToDays = {
    all: 3000,
    week: 7,
    month: 28,
    year: 364,
  };

  // start with the previous day
  const currentPeriodEnd = 1;
  const currentPeriodStart = rangeToDays[range];
  const prevPeriodEnd = currentPeriodStart + 1;
  const prevPeriodStart = currentPeriodStart * 2;

  const getDate = num =>
    moment()
      .subtract(num, 'days')
      .format('YYYY-MM-DD');

  // format date strings based on the range
  const currentPeriodEndDate = getDate(currentPeriodEnd);
  const currentPeriodStartDate = getDate(currentPeriodStart);
  const prevPeriodEndDate = getDate(prevPeriodEnd);
  const prevPeriodStartDate = getDate(prevPeriodStart);

  const statsPromises = ids.map(async id => {
    const [current, previous] = await Promise.all([
      fetchData(`podcasts/${id}/statistics?start=${currentPeriodStartDate}&end=${currentPeriodEndDate}`),
      fetchData(`podcasts/${id}/statistics?start=${prevPeriodStartDate}&end=${prevPeriodEndDate}`),
    ]);

    return {
      id,
      totals: {
        current: current.total_listens,
        previous: previous.total_listens,
      },
    };
  });

  return Promise.all(statsPromises);
};

const handler = async (req, res) => {
  const stats = await getStats(req.query.range);
  return res.send(stats)
};

export default cors(handler);
