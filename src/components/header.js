import React from 'react'
import { Link } from 'gatsby'
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'linear-gradient(to right, #00ff6d, #00faff)' ,
      marginBottom: '1.45rem',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#2b2b2b',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Navbar />
  </div>
)

export default Header
