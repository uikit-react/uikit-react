import React from 'react'
import PropTypes from 'prop-types'

const Label = ({
  type,
  label
}) => (
  <span
    className={`
      uk-label 
      ${type && `uk-label-${type}`}
    `}
  >
    {label}
  </span>
)

Label.propTypes = {
  type: PropTypes.oneOf([
    'success',
    'warning',
    'danger'
  ]),
  label: PropTypes.string
}

export default Label
