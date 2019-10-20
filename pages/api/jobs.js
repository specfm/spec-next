const microCors = require('micro-cors');
const cors = microCors();
const SEEKER_URL = 'https://api.seeker.company/v1';
const { SEEKER_API_KEY } = process.env;

const getJobs = async () => {
  try {
    const req = fetch(`${SEEKER_URL}/jobs`, {
      headers: {
        Authorization: `Token ${SEEKER_API_KEY}`,
      },
    });
    const res = await req;
    const json = await res.json();
    return json.results;
  } catch (err) {
    return Promise.resolve([]);
  }
};

const handler = async (req, res) => {
  return res.send(await getJobs())
};

export default cors(handler);
