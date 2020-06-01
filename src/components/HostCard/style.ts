import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`

export const Name = styled.h4`
  font-size: 18px;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.3;
`

export const Username = styled.h5`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-tertiary);
`
