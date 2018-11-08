import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const BreadcrumbItem = ({ disabled, href, target, children }) => (
  <li className={classNames({ 'uk-disabled': disabled })}>
    {(disabled || !href)
      ? <span>{children}</span>
      : <a href={href} target={target}>{children}</a>
    }
  </li>
)

BreadcrumbItem.defaultType = {
  disabled: false
}

BreadcrumbItem.propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.string.isRequired
}

export default BreadcrumbItem
