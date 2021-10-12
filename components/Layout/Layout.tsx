import Footer from '@components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
