// @flow
import * as React from 'react'
import type { SimplecastEpisode } from '../../types'
import GlobalPlayer from '../GlobalPlayer/context'
import Icon from '../Icon'
import {
  MiniPlayBox,
  PlayBox,
  IconContainer,
  TextContainer,
  Title,
  Description,
} from './style'

type Props = {
  episode: SimplecastEpisode,
  size: 'mini' | 'full'
}


class EpisodePlayButton extends React.Component<Props> {
  render() {
    const { episode, size = 'full' } = this.props
    
    return (
      <GlobalPlayer.Consumer>
        {
          context => {
            const shouldInitGlobalPlayer = context.trackQueue.length === 0
            const isSameTrackAsGlobalPlayer = context.trackQueue.length > 0 && context.trackQueue[0].id === episode.id

            let playAction
            
            if (shouldInitGlobalPlayer) {
              playAction = () => context.addTrackToQueue(episode)
            } else {

              if (isSameTrackAsGlobalPlayer) {
                if (context.isPlaying) {
                  playAction = () => context.pause()
                } else {
                  playAction = () => context.play()
                }
              } else {
                playAction = () => context.addTrackToQueue(episode)
              }
            }

            if (size === 'full') {
              return (
                <PlayBox 
                  onClick={playAction}>
                  <IconContainer>
                    {
                      context.isPlaying && isSameTrackAsGlobalPlayer
                      ? <Icon glyph="pause" />
                      : <Icon glyph="play" />
                    }
                  </IconContainer>
                  
                  <TextContainer>
                    <Title>{
                      context.isPlaying && isSameTrackAsGlobalPlayer
                      ? 'Pause'
                      : 'Play'
                    }</Title> 
                    <Description>You can navigate the rest of the site while listening!</Description>
                  </TextContainer>
                </PlayBox>
              )
            }

            if (size === 'mini') {
              return (
                <MiniPlayBox 
                  onClick={playAction}>
                  <IconContainer>
                    {
                      context.isPlaying && isSameTrackAsGlobalPlayer
                      ? <Icon glyph="pause" size={22} />
                      : <Icon glyph="play" size={22} />
                    }
                  </IconContainer>
                </MiniPlayBox>
              )
            }
          }
        }
      </GlobalPlayer.Consumer>
    )
  }
}

export default EpisodePlayButton