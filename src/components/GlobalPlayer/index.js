// @flow
import * as React from 'react';
import Link from 'next/link'
import { api } from '../../config';
import PlayerContext from './context';
import Icon from '../Icon';
import {
  Container,
  PodcastTitle,
  EpisodeTitle,
  IconContainer,
  TextContainer,
  Scrubber,
  StyledAudioPlayer,
  SubscriptionsContainer,
  ContentContainer,
} from './style';
import SubscriptionButtons from './SubscriptionButtons';

class GlobalPlayer extends React.Component<{}> {
  render() {
    return (
      <PlayerContext.Consumer>
        {context => {
          const hasTrack = context.trackQueue.length > 0;
          const queuedTrack = hasTrack ? context.trackQueue[0] : undefined;
          const podcast = queuedTrack
            ? api.getConfigPodcastFromId(queuedTrack.podcast_id)
            : undefined;


          return (
            <Container isVisible={hasTrack}>
              <ContentContainer>
                {
                  queuedTrack && (
                    <iframe
                      id="player-iframe"
                      frameBorder="0"
                      height="200px"
                      scrolling="no"
                      seamless
                      src={`https://embed.simplecast.com/${api.getEpisodePlayerId(queuedTrack.sharing_url)}?color=3d3d3d`}
                      width="100%"
                      data-cy="latest-episode"
                    />
                  )
                }
              </ContentContainer>

              {podcast && (
                <SubscriptionsContainer
                  isVisible={true}
                >
                  <SubscriptionButtons podcast={podcast} />
                </SubscriptionsContainer>
              )}
            </Container>
          );
        }}
      </PlayerContext.Consumer>
    );
  }
}

export default GlobalPlayer;
