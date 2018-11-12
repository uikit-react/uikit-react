import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Label = ({
  type,
  children
}) => {
  const labelClasses = classnames({
    'uk-label': true,
    [`uk-label-${type}`]: type
  })

  return (
    <span
      className={labelClasses}
    >
      {children}
    </span>
  )
}

Label.propTypes = {
  type: PropTypes.oneOf([
    'success',
    'warning',
    'danger'
  ]),
  children: PropTypes.node
}

export default Label
