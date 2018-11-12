import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Tile = ({
  children,
  type,
  padding
}) => {
  const flexClasses = classnames({
    'uk-tile': true,
    [`uk-tile-${type}`]: type,
    [`uk-tile-${padding}`]: padding
  })

  return (
    <div className={flexClasses}>
      {children}
    </div>
  )
}

Tile.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  type: PropTypes.oneOf([
    'default',
    'muted',
    'primary',
    'secondary'
  ]).isRequired,
  padding: PropTypes.oneOf([
    'remove',
    'small',
    'large'
  ])
}

export default Tile
