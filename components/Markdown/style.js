// @flow
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const Notes = styled(ReactMarkdown)`

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: ${props => props.theme.text.default};
    margin-top: 28px;
  }

  h2 {
    font-size: 26px;
    font-weight: 700;
    color: ${props => props.theme.text.default};
    margin-top: 26px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: ${props => props.theme.text.default};
    margin-top: 24px;
  }

  h4 {
    font-size: 22px;
    font-weight: 600;
    color: ${props => props.theme.text.default};
    margin-top: 16px;
  }

  h5 {
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.text.default};
    margin-top: 16px;
  }

  h6 {
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.text.default};
    margin-top: 16px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    color: ${props => props.theme.text.secondary};
    margin-top: 8px;
  }

  a {
    color: ${props => props.theme.brand.default};
  }

  a:hover {
    text-decoration: underline;
  }

  ul, ol {
    margin-left: 24px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  li {
    line-height: 2;
  }

  strong {
    font-weight: 600;
  

`