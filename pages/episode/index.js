// @flow
import * as React from 'react'
import type { SimplecastEpisode, ConfigPodcast } from '../../types'

type Props = {
  episode: SimplecastEpisode,
  podcast: ConfigPodcast
}

class Episode extends React.Component<Props> {
  render() {
    return (
      <div>Episode page!</div>
    )
  }
}

export default Episode