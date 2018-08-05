require('now-env')
const SEEKER_URL = 'https://api.seeker.company/v1'
const SEEKER_API_KEY = process.env.SEEKER_API_KEY

const getJobs = async () => {
  try {
    const req = fetch(`${SEEKER_URL}/jobs`, {
      headers: {
        'Authorization': `Token ${SEEKER_API_KEY}`
      }
    });
    const res = await req;
    const json = await res.json();
    return json.results;
  } catch (err) {
    return Promise.resolve([])
  }
}

module.exports = getJobs