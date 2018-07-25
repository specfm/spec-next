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
          <a href={podcast.iTunesUrl} target={"_blank"} rel={"noopener noreferrer"}>
            <Option>
              <Avatar src={'/static/img/apple-podcasts.jpg'} />
              <Label>Apple Podcasts</Label>
              <Arrow />
            </Option>
          </a>
        }

        {
          podcast.overcastUrl &&
          <a href={podcast.overcastUrl} target={"_blank"} rel={"noopener noreferrer"}>
            <Option>
              <Avatar src={'/static/img/overcast.jpg'} />
              <Label>Overcast</Label>
              <Arrow />
            </Option>
          </a>
        }

        {
          podcast.pocketCastsUrl &&
          <a href={podcast.pocketCastsUrl} target={"_blank"} rel={"noopener noreferrer"}>
            <Option>
              <Avatar src={'/static/img/pocketcasts.jpg'} />
              <Label>PocketCasts</Label>
              <Arrow />
            </Option>
          </a>
        }

        {
          podcast.googlePlayUrl &&
          <a href={podcast.googlePlayUrl} target={"_blank"} rel={"noopener noreferrer"}>
            <Option>
              <Avatar src={'/static/img/google-play.png'} />
              <Label>Google Play</Label>
              <Arrow />
            </Option>
          </a>
        }

        {
          podcast.stitcherUrl &&
          <a href={podcast.stitcherUrl} target={"_blank"} rel={"noopener noreferrer"}>
            <Option>
              <Avatar src={'/static/img/stitcher.jpg'}/>
              <Label>Stitcher</Label>
              <Arrow />
            </Option>
          </a>
        }

        {
          podcast.rssFeedUrl &&
          <a href={podcast.rssFeedUrl} target={"_blank"} rel={"noopener noreferrer"}>
            <Option>
              <Avatar />
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