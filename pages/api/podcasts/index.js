const microCors = require('micro-cors');
const cors = microCors();
import simplecast from '../../../lib/simplecast'

const handler = async (_, res) => {
  return res.send(await simplecast(`/podcasts.json`))
};

export default cors(handler);
