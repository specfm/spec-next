// @flow
import * as React from 'react'
import type { ConfigPodcast } from '../../types'
import { Grid, Option, Avatar, Label, Arrow } from './style'

type Props = {
  podcast: ConfigPodcast
}

class PodcastSubscriptionOptions extends React.Component<Props> {
  render() {
    const { podcast } = this.props

    return (
      <Grid>
        {
          podcast.iTunesUrl &&
          <a href={podcast.iTunesUrl} target={"_blank"} rel={"noopener noreferrer"} data-cy="subscription-apple-podcasts">
            <Option>
              <Avatar src={'/static/img/podcasts.png'} />
              <Label>Apple Podcasts</Label>
              <Arrow />
            </Option>
          </a>
        }

        {
          podcast.overcastUrl &&
          <a href={podcast.overcastUrl} target={"_blank"} rel={"noopener noreferrer"} data-cy="subscription-overcast">
            <Option>
              <Avatar src={'/static/img/overcast.png'} />
              <Label>Overcast</Label>
              <Arrow />
            </Option>
          </a>
        }

        {
          podcast.pocketCastsUrl &&
          <a href={podcast.pocketCastsUrl} target={"_blank"} rel={"noopener noreferrer"} data-cy="subscription-pocketcasts">
            <Option>
              <Avatar src={'/static/img/pocketcasts.png'} />
              <Label>PocketCasts</Label>
              <Arrow />
            </Option>
          </a>
        }

        {
          podcast.googlePodcastsUrl &&
          <a href={podcast.googlePodcastsUrl} target={"_blank"} rel={"noopener noreferrer"} data-cy="subscription-google-podcasts">
            <Option>
              <Avatar src={'/static/img/google-podcasts.png'} />
              <Label>Google Podcasts</Label>
              <Arrow />
            </Option>
          </a>
        }

        {
          podcast.castroUrl &&
          <a href={podcast.castroUrl} target={"_blank"} rel={"noopener noreferrer"} data-cy="subscription-castro">
            <Option>
              <Avatar src={'/static/img/castro.png'} />
              <Label>Castro</Label>
              <Arrow />
            </Option>
          </a>
        }

        {
          podcast.breakerUrl &&
          <a href={podcast.breakerUrl} target={"_blank"} rel={"noopener noreferrer"} data-cy="subscription-breaker">
            <Option>
              <Avatar src={'/static/img/breaker.png'} />
              <Label>Breakder</Label>
              <Arrow />
            </Option>
          </a>
        }

        {
          podcast.rssFeedUrl &&
          <a href={podcast.rssFeedUrl} target={"_blank"} rel={"noopener noreferrer"} data-cy="subscription-rss">
            <Option>
              <Avatar src={'/static/img/rss.png'} />
              <Label>RSS Feed</Label>
              <Arrow />
            </Option>
          </a>
        }
      </Grid>
    )
  }
}

export default PodcastSubscriptionOptions