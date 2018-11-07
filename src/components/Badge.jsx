import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({
  children,
  className
}) => (
  <span
    className={`uk-badge ${className}`}
  >
    {children}
  </span>
)

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

Badge.defaultProps = {
  className: ''
}

export default Badge
