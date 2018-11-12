import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Tile = ({
  children,
  type
}) => {
  const flexClasses = classnames({
    'uk-tile': true,
    [`uk-tile-${type}`]: type
  })

  return (
    <div className={flexClasses}>
      {children}
    </div>
  )
}

Tile.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'default',
    'muted',
    'primary',
    'secondary'
  ]).isRequired
}

export default Tile
