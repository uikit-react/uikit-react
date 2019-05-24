import React from 'react'
import PropTypes from 'prop-types'

const Search = ({
  placeholder,
  withIcon,
  withIconClickable,
  modifier,
  href,
  onChange
}) => (
  <div className='uk-margin'>
    <form className={`uk-search uk-search-${modifier}`}>
      {withIcon && !withIconClickable && <span className='uk-search-icon' data-uk-icon='icon: search' />}
      {withIconClickable && !withIcon && <a className='uk-search-icon' href={href}><span data-uk-icon='icon: search' /></a>}
      <input className='uk-search-input' type='search' placeholder={placeholder} onChange={onChange} />
    </form>
  </div>
)

Search.propTypes = {
  withIcon: PropTypes.bool,
  withIconClickable: PropTypes.bool,
  placeholder: PropTypes.string,
  modifier: PropTypes.oneOfType([
    'default',
    'large',
    'navbar',
    'toggle'
  ]),
  href: PropTypes.string,
  onChange: PropTypes.onChange
}

Search.defaultProps = {
  placeholder: '',
  isIconFliped: false,
  withIcon: false,
  withIconClickable: false,
  modifier: 'default',
  href: '',
  onChange: () => null
}

export default Search
