import microCors from 'micro-cors'
import fetch from 'isomorphic-unfetch'
import simplecast from '../../../lib/simplecast'

const cors = microCors();

const handler = async (_, res) => {
  return res.send(await simplecast(`/podcasts.json`))
};

export default cors(handler);
