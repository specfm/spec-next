// @flow
import styled from 'styled-components'
import { tint } from '../globals'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 968px;
  margin-top: 32px;
  background: ${props => tint(props.theme.bg.wash, -4)};
  padding: 10px 10px 10px 16px;
  border-radius: 8px;
  position: relative;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: flex-start; 
    padding: 16px;
    padding-bottom: 24px;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  flex: 1;

  @media (max-width: 968px) {
    flex-direction: column; 
    align-items: flex-start;
    justify-content: stretch;
    padding-left: 0;
  }
`

export const Label = styled.p`
  display: flex;
`

export const Dismiss = styled.button`
  display: flex;
  width: 18px;
  height: 18px;
  background: none;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  color: ${props => props.theme.text.tertiary};
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background: ${props => props.theme.text.tertiary};
    color: ${props => props.theme.bg.default};
  }

  i {
    position: relative;
    top: -1px;
    font-style: normal;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
  }

  @media (max-width: 968px) {
    position: absolute;
    top: 16px;
    right: 16px; 
  }
`

export const EmailInput = styled.input`
  border-radius: 4px;
  background: ${props => props.theme.bg.default};
  color: ${props => props.theme.text.secondary};
  padding: 8px 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  -webkit-appearance: none;
  display: flex;
  width: 100%;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.2s ease-in-out;
  }
`

export const Submit = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 24px;
  background: none;
  z-index: 1;
  padding-left: 8px;
  cursor: pointer;
`

export const SubmitIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
  display: flex;
  align-items: center;
  padding-right: 4px;
  padding-left: 24px;
  color: ${props => props.theme.text.default};
  border-radius: 8px;
  background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255, 1) 25%, rgba(255,255,255,1));
`

export const Field = styled.div`
  position: relative;
`

export const EmbedContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  padding-left: 32px;

  @media (max-width: 968px) {
    padding-left: 0;
    margin-top: 16px;
    width: 100%; 
  }
  
  form {
    width: 100%;
  }
`