// @flow
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 968px;
`

export const JobContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.border.default};
  flex-direction: column;
  background: ${props => props.theme.bg.wash};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${props => props.theme.bg.default};
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.10);
    transform: translateY(-3px);
    transition: all 0.2s ease-in-out;
  }

  &:active {
    box-shadow: 0 6px 20px rgba(0,0,0,0.09);
    transform :translateY(-2px);
    transition: all 0.2s ease-in-out;
  }
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.text.default};
`

export const Role = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.text.secondary};
`

export const Location = styled.p`
  font-size: 18px;
  font-weight:4500;
  color: ${props => props.theme.text.tertiary};

`