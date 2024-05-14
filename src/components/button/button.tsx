import { MouseEventHandler, ReactNode } from 'react'
import * as styles from '@/components/button/button.styles'

export interface ButtonProps {
  children?: ReactNode
  /**
   * Callback fired when the Button Clicked.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
  const { children, onClick } = props

  return (
    <button className={styles.root} onClick={onClick} data-testid="button">
      {children}
    </button>
  )
}
