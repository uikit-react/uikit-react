import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumb = ({ children }) => (
  <ul className='uk-breadcrumb'>
    {children}
  </ul>
)

Breadcrumb.propTypes = {
  children: PropTypes.func
}

export default Breadcrumb
