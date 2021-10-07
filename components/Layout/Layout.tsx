import Navbar from 'components/Navbar/Navbar'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__children">{children}</div>
      <footer>This is the footer</footer>
    </div>
  )
}

export default Layout
