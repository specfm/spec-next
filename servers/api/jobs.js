// @flow
const SEEKER_URL = 'https://api.seeker.company/v1'
const SEEKER_API_KEY = '384a0a09-1bae-4d94-8cfd-d01b6b1c72a3'

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