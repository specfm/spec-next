// @flow
import type { ConfigPodcast } from "../types";

export default (array: Array<ConfigPodcast>) => {
  return [
    363,
    1034,
    9926,
    6265,
    1386,
    1684,
    2128,
    2693,
    4211,
    99999,
    1332,
    1457,
    2070
  ].map(id => array.find(podcast => podcast && podcast.id === id));
};
