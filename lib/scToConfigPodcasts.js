// @flow
import type { ConfigPodcast } from '../types';

const shuffle = (arr: Array<any>): Array<any> => {
  let currentIndex = arr.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
};

export default (array: Array<ConfigPodcast>) => {
  let podcasts = array;

  const active = [363, 1034, 9926, 6265, 1386, 1684, 2128, 2693, 4211, 99999];
  const randomized = shuffle(active);

  if (array && array.length > 0) {
    const sc = array;
    const sorted = [...randomized, 1332, 1457, 2070].map(id =>
      sc.find(podcast => podcast && podcast.id === id)
    );

    podcasts = [...sorted];
  }

  return podcasts;
};
