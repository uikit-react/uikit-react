import React from 'react'
import PropTypes from 'prop-types'

const Label = ({
  type,
  children
}) => (
  <span
    className={`
      uk-label 
      ${type && `uk-label-${type}`}
    `}
  >
    {children}
  </span>
)

Label.propTypes = {
  type: PropTypes.oneOf([
    'success',
    'warning',
    'danger'
  ]),
  children: PropTypes.node
}

export default Label
