import toobusy from 'toobusy-js';

export default (req, res, next) => {
  // Don't send 503s in testing, that's dumb, just wait it out
  if (process.env.NODE_ENV !== 'testing' && !process.env.TEST_DB && toobusy()) {
    res.statusCode = 503;
    res.end(
      'It looks like Spectrum is very busy right now, please try again in a minute.'
    );
  } else {
    next();
  }
};
