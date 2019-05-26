import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Divider = ({ icon, small, vertical }) => (
  <hr className={classnames({
    'uk-divider-icon': icon,
    'uk-divider-small': small,
    'uk-divider-vertical': vertical
  })} />
)

Divider.propTypes = {
  icon: PropTypes.bool,
  small: PropTypes.bool,
  vertical: PropTypes.bool
}

export default Divider
