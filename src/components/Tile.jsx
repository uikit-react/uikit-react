import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Tile = ({
  children,
  type,
  padding
}) => {
  const classes = classnames({
    'uk-tile': true,
    [`uk-tile-${type}`]: type,
    [`uk-tile-${padding}`]: padding
  })

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Tile.propTypes = {
  children: PropTypes.element.isRequired,
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
