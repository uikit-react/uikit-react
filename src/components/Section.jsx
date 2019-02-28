import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Section = ({
  children,
  styleModifiers,
  preserveColor,
  sizeModifier,
  overlap
}) => {
  const classes = classnames({
    'uk-section': true,
    'uk-preserve-color': preserveColor,
    'uk-section-overlap': overlap,
    [`uk-section-${styleModifiers}`]: styleModifiers,
    [`uk-section-${sizeModifier}`]: sizeModifier
  })

  return (
    <div className={classes}>
      <div className='uk-container'>
        {children}
      </div>
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  styleModifiers: PropTypes.oneOf([
    'default',
    'muted',
    'primary',
    'secondary'
  ]),
  preserveColor: PropTypes.bool,
  overlap: PropTypes.bool,
  sizeModifier: PropTypes.oneOf([
    'xsmall',
    'small',
    'large',
    'xlarge',
    'remove-vertical'
  ])
}

export default Section
