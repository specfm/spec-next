// @flow
import * as React from 'react'
import PlayerContext from './context'
import { Container } from './style'
import Dismiss from '../Dismiss'

class GlobalPlayer extends React.Component<{}> {
  render() {
    return (
      <PlayerContext.Consumer>
        {
          context => (
            <Container isVisible={context.trackQueue.length > 0}>
              <Dismiss onDismiss={context.clearQueue}><i>×</i></Dismiss>
            </Container>
          )
        }
      </PlayerContext.Consumer>
    )
  }
}

export default GlobalPlayer