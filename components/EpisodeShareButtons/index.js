// @flow
import * as React from 'react'
import type { ConfigPodcast, SimplecastEpisode } from '../../types'
import { ButtonRow, FacebookButton, TwitterButton, CopyLinkButton } from '../Button'
import { Container } from './style'

type Props = {
  podcast: ConfigPodcast,
  episode: SimplecastEpisode
}

class EpisodeShareButtons extends React.Component<Props> {
  render() {
    const { podcast, episode } = this.props

    return (
      <Container>
        <ButtonRow>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https://spec.fm/podcasts/${podcast.slug}/${episode.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookButton>
            Share
          </FacebookButton>
        </a>

        <a
          href={`https://twitter.com/share?text=${episode.title} on @${podcast.twitterUsername}&url=https://spec.fm/podcasts/${podcast.slug}/${episode.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterButton>
            Tweet
          </TwitterButton>
        </a>

          <CopyLinkButton text={`https://spec.fm/podcasts/${podcast.slug}/${episode.id}`}>
            Copy
          </CopyLinkButton>
        </ButtonRow>
      </Container>
    )
  }
}

export default EpisodeShareButtons