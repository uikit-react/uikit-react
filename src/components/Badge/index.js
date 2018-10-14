import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Badge = ({
  children,
  className,
  isLoading
}) => (
  <span
    className={
      `uk-badge ${className} ${isLoading && 'skeleton'}`
    }
  >
    {!isLoading && children}
  </span>
)

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool
}

Badge.defaultProps = {
  className: '',
  isLoading: false,
  isDisabled: false
}

export default Badge
