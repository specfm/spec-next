import styled from 'styled-components'

export const Dismiss = styled.button`
  display: flex;
  width: 18px;
  height: 18px;
  background: none;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  color: var(--text-tertiary);
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background: var(--text-tertiary);
    color: var(--bg-primary);
  }

  i {
    position: relative;
    top: -1px;
    font-style: normal;
    font-size: 18px;
    line-height: 1;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`
