import * as React from 'react'
import GlobalStyles from '~/components/GlobalStyles'
import SEO from './SEO'
import DarkMode from './DarkMode'

interface Props {
  children?: any
}

export default function Providers({ children }: Props) {
  return (
    <React.Fragment>
      <SEO />
      <DarkMode />
      <GlobalStyles.ResetStyles />

      {children}
    </React.Fragment>
  )
}
