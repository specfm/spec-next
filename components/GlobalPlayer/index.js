// @flow
import * as React from 'react';
import Link from 'next/link'
import { api } from '../../config';
import PlayerContext from './context';
import Dismiss from '../Dismiss';
import Icon from '../Icon';
import {
  Container,
  PodcastTitle,
  EpisodeTitle,
  DismissContainer,
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
              <DismissContainer>
                <Dismiss
                  color={theme => theme.border.default}
                  onDismiss={context.clearQueue}
                >
                  <i>×</i>
                </Dismiss>
              </DismissContainer>

              <ContentContainer>
                {hasTrack && queuedTrack && (
                  <IconContainer
                    onClick={context.isPlaying ? context.pause : context.play}
                  >
                    {context.isPlaying ? (
                      <Icon glyph="pause" />
                    ) : (
                      <Icon glyph="play" />
                    )}
                  </IconContainer>
                )}

                {hasTrack && queuedTrack && podcast && (
                  <TextContainer>
                    <Link
                      href="/podcasts/[slug]/[episodeId]"
                      as={`/podcasts/${podcast.slug}/${queuedTrack.id}`}
                    >
                      <PodcastTitle>{podcast.name}</PodcastTitle>
                    </Link>

                    <Link
                      href="/podcasts/[slug]/[episodeId]"
                      as={`/podcasts/${podcast.slug}/${queuedTrack.id}`}
                    >
                      <EpisodeTitle>{queuedTrack.title}</EpisodeTitle>
                    </Link>

                    <StyledAudioPlayer
                      id="global-player-audio"
                      autoPlay
                      src={queuedTrack.audio_url}
                      controls={false}
                      preload="none"
                      onEnded={context.onTrackEnded}
                      onTimeUpdate={context.onProgress}
                    />

                    <Scrubber
                      type="range"
                      min="0"
                      max={queuedTrack.duration}
                      onChange={context.scrub}
                      value={context.progress}
                    />
                  </TextContainer>
                )}
              </ContentContainer>

              {podcast && (
                <SubscriptionsContainer
                  isVisible={context.displaySubscriptions}
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
