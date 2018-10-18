// @flow
import * as React from 'react'
import type { SimplecastEpisode } from '../../types'
export const defaultPlayerContext = {
  trackQueue: [],
  isPlaying: false,
  currentTrackIsComplete: false,

  // add functions to provide flow types to downstream consumers
  // although all actual function logic is implemented in pages/_app.js
  // via class methods and state handlers
  addTrackToQueue: (episode: SimplecastEpisode) => {},
  clearQueue: () => {}
}

export default React.createContext(defaultPlayerContext)