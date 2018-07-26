// @flow
import styled, { css } from 'styled-components';
import { Shadow, hexa, tint } from '../globals';
import type { Size } from './';

const getPadding = (size: Size) => {
  switch (size) {
    case 'small':
      return '2px 4px';
    case 'default':
      return '8px 16px';
    case 'large':
      return '12px 24px';
    default: {
      return '8px 16px';
    }
  }
};

const getFontSize = (size: Size) => {
  switch (size) {
    case 'small':
      return '12px';
    case 'default':
      return '14px';
    case 'large':
      return '16px';
    default: {
      return '14px';
    }
  }
};

const base = css`
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: ${props => getFontSize(props.size)};
  font-weight: 500;
  white-space: nowrap;
  word-break: keep-all;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  line-height: 1;
  position: relative;
  text-align: center;
  padding: ${props => getPadding(props.size)};
  opacity: ${props => (props.disabled ? '0.64' : '1')};
  box-shadow: ${props =>
    props.disabled ? 'none' : `0 1px 2px rgba(0,0,0,0.04)`};

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: ${props =>
      props.disabled ? 'none' : `${Shadow.mid} rgba(0,0,0,0.08)`};
  }
`;

export const Button = styled.button`
  ${base}
  border: 1px solid ${props => props.theme.border.default};
  color: ${props => props.theme.text.secondary};
  background-color: ${props => props.theme.bg.default};
  background-image: ${props =>
    `linear-gradient(to bottom, ${props.theme.bg.default}, ${
      props.theme.bg.wash
    })`};
  
  &:hover {
    color: ${props => props.theme.text.default};
  }

  &:active {
    border: 1px solid ${props => props.theme.border.active};
    background-image: ${props =>
      `linear-gradient(to top, ${props.theme.bg.default}, ${
        props.theme.bg.wash
      })`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props =>
      props.theme.bg.default}, 0 0 0 3px ${props => props.theme.border.default};
  }
`;

export const PrimaryButton = styled.button`
  ${base}
  border: 1px solid ${props => props.theme.brand.default};
  color: ${props => props.theme.bg.default};
  background-color: ${props => props.theme.brand.alt};
  background-image: ${props =>
    `linear-gradient(to bottom, ${props.theme.brand.alt}, ${
      props.theme.brand.default
    })`};
  text-shadow: 0 1px 1px rgba(0,0,0,0.08);

  &:hover {
    color: ${props => props.theme.text.reverse};
    background-image: ${props =>
      `linear-gradient(to bottom, ${tint(props.theme.brand.alt, 16)}, ${tint(
        props.theme.brand.default,
        16
      )})`};
    box-shadow: ${props =>
      props.disabled ? 'none' : `${Shadow.mid} rgba(0,0,0,0.12)`};
  }

  &:active {
    border: 1px solid ${props => props.theme.brand.default};
    background-image: ${props =>
      `linear-gradient(to top, ${props.theme.brand.alt}, ${
        props.theme.brand.default
      })`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props =>
      props.theme.bg.default}, 0 0 0 3px ${props => hexa(props.theme.brand.alt, 0.16)};
  }
`;


export const GhostButton = styled.button`
  ${base} border: none;
  color: ${props => props.theme.text.secondary};
  box-shadow: none;
  background-color: transparent;
  background-image: none;

  &:hover {
    background: ${props => tint(props.theme.bg.wash, -3)};
    color: ${props => props.theme.text.default};
    box-shadow: none;
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props => props.theme.bg.default},
      0 0 0 3px ${props => hexa(props.theme.text.tertiary, 0.08)};
  }
`;

export const OutlineButton = styled.button`
  ${base}
  border: 1px solid ${props => props.theme.border.default};
  color: ${props => props.theme.text.secondary};
  background-color: transparent;
  background-image: none;

  &:hover {
    color: ${props => props.theme.text.default};
    border: 1px solid ${props => props.theme.border.active};
    box-shadow: none;
  }

  &:active {
    border: 1px solid ${props => props.theme.text.placeholder};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props =>
      props.theme.bg.default}, 0 0 0 3px ${props => props.theme.border.default};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 8px;
  }
`;

export const ButtonSegmentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    z-index: 1;
  }

  button:active,
  button:focus {
    z-index: 2;
  }

  button:first-of-type:not(:last-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button:last-of-type:not(:first-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  button:not(:last-of-type):not(:first-of-type) {
    border-radius: 0;
    position: relative;
    margin: 0 -1px;
  }

  button:not(:last-of-type) {
    box-shadow: inset -1px 0 0 ${props => hexa(props.theme.bg.default, 0.12)};
  }

  ${PrimaryButton} {
    &:focus {
      box-shadow: 0 0 0 1px ${props => props.theme.bg.default},
        0 0 0 3px ${props => hexa(props.theme.brand.alt, 0.16)};
    }
  }
`;


export const FacebookButton = styled.button`
  ${base}
  border: 1px solid ${props => props.theme.social.facebook};
  color: ${props => props.theme.bg.default};
  background-color: ${props => props.theme.social.facebook};
  background-image: ${props =>
    `linear-gradient(to bottom, ${props.theme.social.facebook}, ${
      props.theme.social.facebook
    })`};
  text-shadow: 0 1px 1px rgba(0,0,0,0.08);

  .icon {
    margin-right: 8px;
    margin-left: -4px;
  }

  &:hover {
    color: ${props => props.theme.text.reverse};
    background-image: ${props =>
      `linear-gradient(to bottom, ${tint(props.theme.social.facebook, 16)}, ${tint(
        props.theme.social.facebook,
        16
      )})`};
    box-shadow: ${props =>
      props.disabled ? 'none' : `${Shadow.mid} rgba(0,0,0,0.12)`};
  }

  &:active {
    border: 1px solid ${props => props.theme.social.facebook};
    background-image: ${props =>
      `linear-gradient(to top, ${props.theme.social.facebook}, ${
        props.theme.social.facebook
      })`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props =>
      props.theme.bg.default}, 0 0 0 3px ${props => hexa(props.theme.social.facebook, 0.16)};
  }
`;

export const TwitterButton = styled.button`
  ${base}
  border: 1px solid ${props => props.theme.social.twitter};
  color: ${props => props.theme.bg.default};
  background-color: ${props => props.theme.social.twitter};
  background-image: ${props =>
    `linear-gradient(to bottom, ${props.theme.social.twitter}, ${
      props.theme.social.twitter
    })`};
  text-shadow: 0 1px 1px rgba(0,0,0,0.08);

  .icon {
    margin-right: 8px;
    margin-left: -4px;
  }

  &:hover {
    color: ${props => props.theme.text.reverse};
    background-image: ${props =>
      `linear-gradient(to bottom, ${tint(props.theme.social.twitter, 4)}, ${tint(
        props.theme.social.twitter,
        4
      )})`};
    box-shadow: ${props =>
      props.disabled ? 'none' : `${Shadow.mid} rgba(0,0,0,0.12)`};
  }

  &:active {
    border: 1px solid ${props => props.theme.social.twitter};
    background-image: ${props =>
      `linear-gradient(to top, ${props.theme.social.twitter}, ${
        props.theme.social.twitter
      })`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props =>
      props.theme.bg.default}, 0 0 0 3px ${props => hexa(props.theme.social.twitter, 0.16)};
  }
`;

export const CopyLinkButton = styled.button`
  ${base}
  border: 1px solid ${props => props.isClicked ? tint(props.theme.success.default, -10) : props.theme.border.default};
  color: ${props => props.isClicked ? props.theme.bg.default : props.theme.text.secondary};
  background-color: ${props => props.isClicked ? props.theme.success.default : props.theme.bg.default};
  background-image: ${props =>
    `linear-gradient(to bottom, ${props.isClicked ? props.theme.success.default : props.theme.bg.default}, ${
      props.isClicked ? tint(props.theme.success.default, -4) : props.theme.bg.wash
    })`};
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out, background-image 0.2s ease-in-out;

  &:hover {
    transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out, background-image 0.2s ease-in-out;
    color: ${props => props.isClicked ? props.theme.bg.default : props.theme.text.default};
  }

  &:active {
    border: 1px solid ${props => props.isClicked ? tint(props.theme.success.default, -10) : props.theme.border.active};
    background-image: ${props =>
      `linear-gradient(to bottom, ${props.isClicked ? tint(props.theme.success.default, -4) : props.theme.bg.default}, ${
        props.isClicked ? props.theme.success.default : props.theme.bg.wash
      })`};
  }

  .icon {
    margin-right: 8px;
    margin-left: -4px;
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props =>props.theme.bg.default}, 0 0 0 3px ${props => props.isClicked ? hexa(props.theme.success.default, 0.16) : props.theme.border.default};
  }
`