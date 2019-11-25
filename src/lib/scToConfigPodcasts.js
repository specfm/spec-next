// @flow
import type { ConfigPodcast } from '../../types';

export default (array: Array<ConfigPodcast>) => {
  let podcasts = array;

  const active = ['363', '1034', '9926', '6265', '1386', '1684', '2128', '2693', '4211', '99999'];

  if (array && array.length > 0) {
    const sc = array;
    const sorted = [...active, '1332', '1457', '2070'].map(id =>
      sc.find(podcast => podcast && podcast.id === id)
    );

    podcasts = [...sorted];
  }

  return podcasts;
};
