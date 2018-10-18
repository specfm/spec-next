// @flow
import * as React from 'react'
import * as localStorage from '../../lib/localStorage'
import Icon from '../Icon'
import { Container, InnerContainer, EmbedContainer, Label, EmailInput, Submit, Field, SubmitIcon } from './style'
import Dismiss from '../Dismiss'

type State = {
  isVisible: boolean
}

class EmailCapture extends React.Component<{}, State> {
  state = { isVisible: false }

  componentDidMount() {
    const isVisible = localStorage && !localStorage.getItemFromStorage('hide_email_capture')
    return this.setState({ isVisible })
  }

  handleDismiss = () => {
    this.setState({ isVisible: false })
    return localStorage && localStorage.storeItem('hide_email_capture', true)
  }

  render() {
    const { isVisible } = this.state

    if (isVisible) {
      return (
        <Container>
          <Dismiss onDismiss={this.handleDismiss}><i>×</i></Dismiss>

          <InnerContainer>
            <Label>Get weekly design and development resources delivered straight to your inbox</Label>
            
            <EmbedContainer id="mc_embed_signup">
              <form 
                action="//brianlovin.us3.list-manage.com/subscribe/post?u=bb74fc37bb01e808269590267&amp;id=1df6e190a1" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate" 
                target="_blank" 
                noValidate
              >
                <div id="mc_embed_signup_scroll">
              
                  <Field className="mc-field-group">
                    <EmailInput type="email" aria-label={'Your email address'} placeholder="Your email address" name="EMAIL" className="required email" id="mce-EMAIL" />
                    <Submit type="submit" aria-label={'Submit'} aria-hidden defaultValue="" name="subscribe" id="mc-embedded-subscribe" />
                    <SubmitIcon>
                      <Icon glyph="view-forward" size={24} />
                    </SubmitIcon>
                  </Field>

                  <div style={{position: 'absolute', left: '-5000px'}}>
                    <input type="text" aria-hidden name="b_bb74fc37bb01e808269590267_171da5009e" tabIndex="-1" defaultValue="" />
                  </div>
                  
                  <div className="response" id="mce-error-response" style={{display:'none'}} />
                  <div className="response" id="mce-success-response" style={{display:'none'}} />
                </div>
              </form>
            </EmbedContainer>

          </InnerContainer>
        </Container>
      )
    }

    return null
  }
}

export default EmailCapture