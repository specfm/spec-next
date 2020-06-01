import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 968px;
  margin-top: 48px;
  background: var(--bg-inset);
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
  padding-right: 16px;
`

export const EmailInput = styled.input`
  border-radius: 4px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  color: var(--text-secondary);
  padding: 8px 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  -webkit-appearance: none;
  display: flex;
  width: 100%;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
  }
`

export const Submit = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 24px;
  visibility: hidden;
  background: none;
  z-index: 1;
  padding-left: 8px;
  cursor: pointer;
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

export const DismissContainer = styled.span`
  @media (max-width: 968px) {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`
