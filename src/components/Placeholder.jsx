import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Placeholder = ({ className, children }) => (
  <div className={classNames('uk-placeholder', className)}>
    {children}
  </div>
)

Placeholder.defaultProps = {
  className: '',
  children: ''
}

Placeholder.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

export default Placeholder
