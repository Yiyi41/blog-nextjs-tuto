import React from 'react'
import Navbarv from '../../Navbar/Navbar'

export default function Layout({children}) {
  return (
      <>
          <Navbarv />
          {children}
    </>
  )
}
