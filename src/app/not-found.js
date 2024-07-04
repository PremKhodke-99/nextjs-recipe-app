import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>This page cannot be found.</h1>
        <Link href={'/'}>Go to homepage</Link>
    </div>
  )
}

export default NotFound