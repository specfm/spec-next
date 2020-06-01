import styled from 'styled-components'
import { tint, Content, hexa } from '../globals'

export const Container = styled.div`
  max-width: 768px;
  width: 100%;
`

export const ContentContainer = styled.div`
  ${Content};
`

export const HeaderImage = styled.img`
  width: 100%;
  margin: 64px 0 32px;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: var(--text-primary);
`

export const Subtitle = styled.span`
  font-size: 24px;
  font-weight: 400;
  color: var(--text-tertiary);
`

export const PostHeader = styled.div`
  margin-bottom: 32px;
`

export const Notice = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: var(--bg-inset);
  padding: 24px;
  margin: 32px 0;
`

export const NoticeTitle = styled.h6`
  color: var(--text-primary);
  font-weight: 700 !important;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.8px;
  margin-top: 0 !important;
  display: flex;
  align-items: center;
`

export const NoticeDescription = styled.p`
  margin-top: 12px;
  color: var(--text-secondary);
  font-weight: 400;

  a {
    color: var(--text-link);
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const WarnNotice = styled(Notice)`
  background-color: #fff0ca;
`

export const WarnNoticeTitle = styled(NoticeTitle)`
  color: ${tint('#FFF0CA', -80)};
`

export const WarnNoticeDescription = styled(NoticeDescription)`
  color: ${tint('#FFF0CA', -64)};
`

export const CustomNotice = styled(Notice)`
  background-color: ${(props) => hexa(props.color, 0.12)};
`

export const CustomNoticeTitle = styled(NoticeTitle)`
  color: ${(props) => props.color};
`

export const CustomNoticeDescription = styled(NoticeDescription)`
  color: ${(props) => props.color};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-gap: 32px;
  margin: 32px 0;

  img {
    width: 100%;
    margin-top: 32px;
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;

    img {
      margin-top: 16px;
    }
  }
`

export const Divider = styled.div`
  height: 1px;
  background: var(--border-primary);
  margin: 32px 0;
`
