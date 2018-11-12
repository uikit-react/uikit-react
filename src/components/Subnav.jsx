import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Subnav = ({
  children,
  divider,
  pill
}) => {
  const subnavClasses = classnames({
    'uk-subnav': true,
    'uk-subnav-divider': divider,
    'uk-subnav-pill': pill
  })

  return (
    <ul className={subnavClasses}>
      {children}
    </ul>
  )
}

Subnav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  divider: PropTypes.string,
  pill: PropTypes.string
}

export default Subnav
