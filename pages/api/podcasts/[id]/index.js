const microCors = require('micro-cors');
const cors = microCors();
import simplecast from '../../../../lib/simplecast'

const handler = async (req, res) => {
  return res.send(await simplecast(`/podcasts/${req.query.id}.json`))
};

export default cors(handler);
