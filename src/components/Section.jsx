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
<<<<<<< HEAD
  ]).isRequired,
=======
  ]),
>>>>>>> finished section component
  styleModifiers: PropTypes.oneOf([
    'default',
    'muted',
    'primary',
    'secondary'
  ]),
<<<<<<< HEAD
  preserveColor: PropTypes.bool,
  overlap: PropTypes.bool,
=======
  preserveColor: PropTypes.bool.isRequired,
  overlap: PropTypes.bool.isRequired,
>>>>>>> finished section component
  sizeModifier: PropTypes.oneOf([
    'xsmall',
    'small',
    'large',
    'xlarge',
    'remove-vertical'
  ])
}

export default Section
