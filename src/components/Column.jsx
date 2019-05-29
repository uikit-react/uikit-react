import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Column = ({ columns, divider, children }) => (
  <div className={classNames(
    { 'uk-column-divider': divider },
    Array.isArray(columns)
      ? columns.map(c => `uk-column-1-${c}`)
      : `uk-column-1-${columns}`
  )}>
    {children}
  </div>
)

Column.defaultProps = {
  columns: 2
}

Column.propTypes = {
  columns: PropTypes.oneOfType(
    PropTypes.oneOf([
      '1', '2', '3', '4', '5'
    ]),
    PropTypes.arrayOf(PropTypes.oneOf([
      '2', '3', '4', '5', '6',
      '2@s', '3@s', '4@s', '5@s', '6@s',
      '2@m', '3@m', '4@m', '5@m', '6@m',
      '2@l', '3@l', '4@l', '5@l', '6@l',
      '2@xl', '3@xl', '4@xl', '5@xl', '6@xl'
    ]))
  ),
  divider: PropTypes.bool,
  children: PropTypes.func
}

export default Column
