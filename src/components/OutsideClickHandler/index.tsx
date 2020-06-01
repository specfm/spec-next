import * as React from 'react'

interface Props {
  children: React.ReactElement | React.ReactElement[]
  onOutsideClick: Function
  style?: unknown
}

export default function OutsideClickHandler(props: Props) {
  const wrapperRef = React.useRef(null)

  function handleClickOutside(event: any) {
    const { onOutsideClick } = props
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      onOutsideClick()
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const { style, children } = props

  return (
    <div style={style} ref={wrapperRef}>
      {children}
    </div>
  )
}
