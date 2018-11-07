import React from 'react'
import PropTypes from 'prop-types'

const Progress = ({ value, max }) =>
  <progress className='uk-progress' value={value} max={max} />

Progress.defaultProps = {
  max: 100
}

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number
}

export default Progress
