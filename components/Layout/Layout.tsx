import Navbar from 'components/Navbar/Navbar'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">{children}</main>
      <footer>This is the footer</footer>
    </div>
  )
}

export default Layout
