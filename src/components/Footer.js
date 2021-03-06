import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
  return (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
      <p className="copyright">&copy; SDN Mekarjaya 13</p>
    </footer>
  )
}

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
