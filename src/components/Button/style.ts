import styled, { css } from 'styled-components'
import { hexa } from '../globals'
import { ButtonSize } from './types'
import theme from '../ThemeUpdate'

const getPadding = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return '4px 8px'
    case 'default':
      return '10px 20px'
    case 'large':
      return '14px 28px'
    default: {
      return '10px 20px'
    }
  }
}

const getFontSize = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return '14px'
    case 'default':
      return '16px'
    case 'large':
      return '18px'
    default: {
      return '16px'
    }
  }
}

const base = css`
  -webkit-appearance: none;
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: ${(props) => getFontSize(props.size)};
  font-weight: 500;
  white-space: nowrap;
  word-break: keep-all;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  line-height: 1;
  position: relative;
  text-align: center;
  padding: ${(props) => getPadding(props.size)};
  opacity: ${(props) => (props.disabled ? '0.64' : '1')};
  box-shadow: ${(props) =>
    props.disabled ? 'none' : `0 1px 2px rgba(0,0,0,0.04)`};

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: ${(props) =>
    props.disabled ? 'none' : `${theme.shadows.button}`};
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--text-link);
  }
`

export const Button = styled.button`
  ${base}
  border: 1px solid var(--border-primary);
  color: var(--text-secondary);
  background-color: var(--bg-primary);

  &:hover {
    color: var(--text-primary);
  }

  &:active {
    border: 1px solid var(--border-primary);
  }
`

export const PrimaryButton = styled.button`
  ${base};
  border: 1px solid var(--text-link);
  color: var(--bg-primary);
  background-color: var(--text-link);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);

  &:hover {
    color: var(--bg-primary);
    box-shadow: ${(props) => (props.disabled ? 'none' : theme.shadows.button)};
  }

  &:active {
    border: 1px solid var(--text-link);
  }
`

export const GhostButton = styled.button`
  ${base};
  border: none;
  color: var(--text-secondary);
  box-shadow: none;
  background-color: transparent;
  background-image: none;

  &:hover {
    background: var(--bg-inset);
    color: var(--text-primary);
    box-shadow: none;
  }
`

export const OutlineButton = styled.button`
  ${base};
  border: 1px solid var(--border-primary);
  color: var(--text-secondary);
  background-color: transparent;
  background-image: none;

  &:hover {
    color: var(--text-primary);
    border: 1px solid var(--border-primary);
    box-shadow: none;
  }

  &:active {
    border: 1px solid var(--text-placeholder);
  }
`

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 968px) {
    flex-wrap: nowrap;

    button {
      margin-top: 8px;
    }
  }
`

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

  ${PrimaryButton} {
    &:focus {
      box-shadow: 0 0 0 1px var(--bg-primary),
        0 0 0 3px ${(props) => hexa(props.theme.brand.alt, 0.16)};
    }
  }
`
