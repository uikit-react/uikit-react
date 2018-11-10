import React from 'react'
import Proptypes from 'prop-types'
import classNames from 'classnames'

const Table = ({ data, divider, striped, hover, small, large, justify, className }) => (
  <table
    className={classNames(
      'uk-table',
      { 'uk-table-divider': divider },
      { 'uk-table-striped': striped },
      { 'uk-table-hover': hover },
      { 'uk-table-small': small },
      { 'uk-table-large': large },
      { 'uk-table-justify': justify },
      className
    )}>
    <thead>
      <tr>
        {Object.keys(data[0]).map(key => (
          <th>{key}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map(row => (
        <tr>
          {Object.values(row).map(value => (
            <td>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

Table.defaultProps = {
  divider: false,
  striped: false
}

Table.propTypes = {
  data: Proptypes.arrayOf(Proptypes.object),
  divider: Proptypes.bool,
  striped: Proptypes.bool,
  hover: Proptypes.bool,
  small: Proptypes.bool,
  large: Proptypes.bool,
  justify: Proptypes.bool,
  className: Proptypes.string
}

export default Table
