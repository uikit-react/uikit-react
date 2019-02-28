import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Search = ({
  placeholder,
  withIcon,
  withIconClickable,
  isIconFliped,
  modifier
}) => (
  <form className={`uk-search-${modifier}`}>
    {withIcon && !withIconClickable && <span uk-icon='search' />}
    {withIconClickable && !withIcon && <a uk-search-icon className={classNames('uk-search-icon-flip', isIconFliped)} />}
    <input className='uk-search-input' type='search' placeholder={placeholder} />
  </form>
)

Search.propTypes = {
  withIcon: PropTypes.bool,
  withIconClickable: PropTypes.bool,
  placeholder: PropTypes.string,
  isIconFliped: PropTypes.bool,
  modifier: PropTypes.oneOfType([
    'default',
    'large',
    'navbar',
    'toggle'
  ])
}

Search.defaultProps = {
  placeholder: '',
  isIconFliped: false,
  withIcon: false,
  withIconClickable: false,
  modifier: 'default'
}

export default Search
