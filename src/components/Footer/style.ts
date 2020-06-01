import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 128px;
  padding: 0 16px;
`

export const Description = styled.p`
  font-size: 14px;
  color: var(--text-tertiary);
  max-width: 320px;
  display: flex;
  flex: 1 0 auto;
  align-items: flex-start;
  padding-bottom: 16px;
`

export const Icons = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: flex-start;
  margin-left: -16px;
  padding-bottom: 8px;

  a {
    color: var(--text-tertiary);
  }

  a:hover {
    color: var(--text-primary);
  }

  .icon {
    margin-left: 16px;
  }
`
