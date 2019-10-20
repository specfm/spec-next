import microCors from 'micro-cors'
import fetch from 'isomorphic-unfetch'
import simplecast from '../../../../../../lib/simplecast'

const cors = microCors();

const handler = async (req, res) => {
  return res.send(await simplecast(`/podcasts/${req.query.id}/episodes/${req.query.episodeId}.json`))
};

export default cors(handler);
