import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, disabled, type, onClick }) => (
  <button
    className={`uk-button uk-button-${type}`}
    onClick={onClick}
    disabled={disabled}
  >{children}
  </button>
)

Button.defaultProps = {
  disabled: false,
  type: 'default'
}

Button.propTypes = {
  /** Button label */
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'danger',
    'text',
    'link'
  ])
}

export default Button
