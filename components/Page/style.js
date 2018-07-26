// @flow
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  max-width: 100%;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1 0 auto;
  padding-top: 64px;
`

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 72px;
  margin-bottom: 48px;
  max-width: 50%;
`

export const Heading = styled.h3`
  font-size: 40px;
  font-weight: 700;
  color: ${props => props.theme.text.default};
  text-align: center;
`

export const Subheading = styled.h4`
  font-size: 22px;
  font-weight: 400;
  color: ${props => props.theme.text.tertiary};
  text-align: center;
`