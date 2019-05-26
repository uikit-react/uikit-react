import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Container = ({ size, children, className }) => (
  <div className={classNames(
    'uk-container',
    { [`uk-container-${size}`]: size },
    { [className]: className }
  )}>
    {children}
  </div>
)

Container.propTypes = {
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'large',
    'expand'
  ]),
  children: PropTypes.func,
  className: PropTypes.string
}

export default Container
