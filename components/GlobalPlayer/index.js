// @flow
import * as React from 'react'
import { api } from '../../config'
import PlayerContext from './context'
import Dismiss from '../Dismiss'
import Icon from '../Icon'
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
} from './style'
import { Link as RouteLink } from '../../config/routes'
import SubscriptionButtons from './SubscriptionButtons';

class GlobalPlayer extends React.Component<{}> {
  render() {
    return (
      <PlayerContext.Consumer>
        {
          context => {
            const hasTrack = context.trackQueue.length > 0
            const queuedTrack = hasTrack ? context.trackQueue[0] : undefined
            const podcast = queuedTrack ? api.getConfigPodcastFromId(queuedTrack.podcast_id) : undefined
            
            return (
              <Container isVisible={hasTrack}>
                <DismissContainer>
                  <Dismiss color={theme => theme.border.default} onDismiss={context.clearQueue}><i>×</i></Dismiss>
                </DismissContainer>

                <ContentContainer>
                  {
                    hasTrack && queuedTrack && (
                      <IconContainer onClick={context.isPlaying ? context.pause : context.play}>
                        {
                          context.isPlaying
                          ? <Icon glyph="pause" />
                          : <Icon glyph="play" />
                        }
                      </IconContainer>
                    )
                  }
                  
                  {
                    hasTrack && queuedTrack && podcast && (
                      <TextContainer>
                        <RouteLink route='episode' params={{ slug: podcast.slug, episodeId: queuedTrack.id }}>
                          <PodcastTitle>{podcast.name}</PodcastTitle> 
                        </RouteLink>
                        
                        <RouteLink route='episode' params={{ slug: podcast.slug, episodeId: queuedTrack.id }}>
                          <EpisodeTitle>{queuedTrack.title}</EpisodeTitle>
                        </RouteLink>
                        
                        <StyledAudioPlayer
                          id="global-player-audio" 
                          autoPlay={true} 
                          src={queuedTrack.audio_url} 
                          controls={false} 
                          preload="none"
                          onEnded={context.onTrackEnded}
                          onTimeUpdate={context.onProgress}
                        ></StyledAudioPlayer>

                        <Scrubber 
                          type="range" 
                          min="0" 
                          max={queuedTrack.duration} 
                          onChange={context.scrub}
                          value={context.progress}
                        />
                      </TextContainer>
                    )
                  }
                </ContentContainer>

                {
                  podcast && 
                  <SubscriptionsContainer isVisible={context.displaySubscriptions}>
                    <SubscriptionButtons podcast={podcast} />
                  </SubscriptionsContainer>
                }
              </Container>
            )
          }
        }
      </PlayerContext.Consumer>
    )
  }
}

export default GlobalPlayer