// @flow
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 64px;
  margin-bottom: 32px;
  max-width: 50%;
`

export const Heading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.text.default};
  text-align: center;
`

export const Subheading = styled.h4`
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.theme.text.tertiary};
  text-align: center;
`