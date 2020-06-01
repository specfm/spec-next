import * as React from 'react'

export type ButtonSize = 'small' | 'large' | 'default'
export interface ButtonProps {
  size?: ButtonSize
  disabled?: boolean
  style?: unknown
  children: React.ReactChild
}
