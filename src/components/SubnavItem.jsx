import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const SubnavItem = ({
  active,
  disabled,
  href,
  target,
  children
}) => (
  <li className={classnames({ 'uk-active': active })}>
    {
      !disabled
        ? (
          <a
            href={href}
            target={target}
          >
            {children}
          </a>
        )
        : <span>{children}</span>
    }
  </li>
)

SubnavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.element.isRequired
}

SubnavItem.defaultProps = {
  active: false,
  disabled: false,
  href: '#',
  target: '#'
}

export default SubnavItem
