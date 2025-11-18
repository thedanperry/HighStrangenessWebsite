'use client'

import { ReactNode } from 'react'
import styles from './ScanlineOverlay.module.css'

interface ScanlineOverlayProps {
  children: ReactNode
  scanlineSpacing?: number
  scanlineOpacity?: number
  className?: string
}

export function ScanlineOverlay({
  children,
  scanlineSpacing = 2,
  scanlineOpacity = 0.3,
  className = '',
}: ScanlineOverlayProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
      <div
        className={styles.scanlineOverlay}
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent ${scanlineSpacing}px,
            rgba(0, 0, 0, ${scanlineOpacity}) ${scanlineSpacing}px,
            rgba(0, 0, 0, ${scanlineOpacity}) ${scanlineSpacing + 0.5}px
          )`,
        }}
      />
    </div>
  )
}

