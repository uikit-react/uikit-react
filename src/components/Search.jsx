import React from 'react'
import PropTypes from 'prop-types'

const withNavbar = (Component) => (props) => ( // export in a seperate file if redundant
  props.modifier === 'navbar'
    ? (
      <nav className='uk-navbar-container' uk-navbar>
        <div className='uk-navbar-left'>
          <Component {...props} />
        </div>
      </nav>
    ) : <Component {...props} />
)

const Search = ({
  placeholder,
  withIcon,
  withIconClickable,
  modifier,
  href,
  onChange
}) => {
  if (withIconClickable) {
    return (
      <div className={`uk-${modifier === 'navbar' ? 'navbar-item' : 'margin'}`}>
        <form className={`uk-search uk-search-${modifier}`}>
          <a className='uk-search-icon' href={href}><span data-uk-icon='icon: search' /></a>
          <input className='uk-search-input' type='search' placeholder={placeholder} onChange={onChange} />
        </form>
      </div>
    )
  } else if (withIcon) {
    return (
      <div className='uk-margin'>
        <form className={`uk-search uk-search-${modifier}`}>
          <span className='uk-search-icon' data-uk-icon='icon: search' />
          <input className='uk-search-input' type='search' placeholder={placeholder} onChange={onChange} />
        </form>
      </div>
    )
  }

  return (
    <div className='uk-margin'>
      <form className={`uk-search uk-search-${modifier}`}>
        <input className='uk-search-input' type='search' placeholder={placeholder} onChange={onChange} />
      </form>
    </div>

  )
}

Search.propTypes = {
  withIcon: PropTypes.bool,
  withIconClickable: PropTypes.bool,
  placeholder: PropTypes.string,
  modifier: PropTypes.oneOfType([
    'default',
    'large',
    'navbar'
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
  onChange: () => null,
  toggle: false
}

export default withNavbar(Search)
