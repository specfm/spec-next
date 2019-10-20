import microCors from 'micro-cors'
import fetch from 'isomorphic-unfetch'
import simplecast from '../../../../lib/simplecast'

const cors = microCors();

const handler = async (req, res) => {
  const { start, end, id } = req.query
  return res.send(await simplecast(`/podcasts/${id}/statistics/overall.json?start_date=${start}&end_date=${end}&timeframe=custom`))
};

export default cors(handler);
