import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  position: relative;
  grid-area: search;

  @media (max-width: 968px) {
    padding-top: 8px;
  }
`

export const SearchInput = styled.input`
  border-radius: 4px !important;
  border: 1px solid var(--border-primary);
  background: var(--bg-inset);
  color: var(--text-secondary);
  padding: 12px 16px;
  width: 100%;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;

  ::-webkit-input-placeholder {
    text-align: center;
  }

  ::-webkit-input-placeholder {
    text-align: center;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    text-align: center;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
  }

  :-ms-input-placeholder {
    text-align: center;
  }

  &:hover {
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  &:focus {
    background: var(--bg-secondary);
    border-radius: 4px !important;
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  &:active {
    border-radius: 4px !important;
  }
`

export const SearchEpisodeContainer = styled.section`
  padding: 12px;
  border-bottom: 1px solid var(--border-primary);
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  align-items: center;

  &:hover {
    background: var(--bg-primary);
  }
`

export const Artwork = styled.img`
  border-radius: 4px;
  width: 40px;
  height: 40px;
  min-width: 40px;
  max-width: 40px;
`

export const Meta = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.2;
  margin-top: 2px;
`

export const Timestamp = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-tertiary);
`

export const AlgoliaLogo = styled.img`
  position: absolute;
  right: 48px;
  top: 13px;
  width: 120px;
  z-index: 1;

  @media (max-width: 968px) {
    top: 21px;
    right: 16px;
  }
`
