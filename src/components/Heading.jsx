import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Heading = ({ variant, size, divider, bullet, line, children, className }) => {
  const H = `${variant}`
  return (
    <H className={classnames(
      { [`uk-heading-${size}`]: size },
      { 'uk-heading-divider': divider },
      { 'uk-heading-bullet': bullet },
      { 'uk-heading-line': line },
      className
    )}>
      {line === true
        ? <span>{children}</span>
        : children
      }
    </H>
  )
}

Heading.defaultProps = {
  variant: 'h1'
}

Heading.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6'
  ]),
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'xlarge',
    '2xlarge'
  ]),
  divider: PropTypes.bool,
  bullet: PropTypes.bool,
  line: PropTypes.bool,
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Heading
