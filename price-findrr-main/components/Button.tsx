"use client"
import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    navigate? : string | string
    label?: React.ReactNode
    className?: string
}

const Button = ({navigate, label, className} : ButtonProps) => {
  return (
    <Link href={navigate ? navigate : ''}><button className={`${className} p-1`}>
        {label}
    </button></Link>
  )
}

export default Button