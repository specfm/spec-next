// @flow
import styled from 'styled-components'

export const Grid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: 280px minmax(656px, 1fr);
  grid-gap: 64px;
  grid-template-rows: auto;
  grid-template-areas: "sidebar content";
  max-width: 968px;
`

export const Sidebar = styled.div`
  grid-area: sidebar;
`

export const Content = styled.div`
  grid-area: content;

  audio {
    margin-bottom: 32px;
  }
`

export const Art = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  margin-bottom: -6px;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${props => props.theme.text.default};
  letter-spacing: 0.8px;
  line-height: 1.2;
`

export const Description = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: ${props => props.theme.text.tertiary};
  line-height: 1.4;
  margin-bottom: 4px;
  margin-top: 24px;

  a:hover {
    color: ${props => props.theme.text.default};
  }
`