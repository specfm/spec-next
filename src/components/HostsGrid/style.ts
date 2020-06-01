import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-template-rows: auto;
  margin: 32px 0;
  width: 100%;
  max-width: 1128px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(
      ${(props) => (props.cols > 2 ? '2' : '1')},
      1fr
    );
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
