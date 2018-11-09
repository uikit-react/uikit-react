import React from 'react'
import PropTypes from 'prop-types'

const Flex = ({
  children,
  isInline,
  horizontalAlignement,
  verticalAlignement,
  directionModifiers,
  wrapModifiers,
  wrapModifiersAlignment,
  itemOrder,
  itemDimensions
}) => {
  let flexClasses = isInline ? 'uk-flex-inline' : 'uk-flex'
  if (wrapModifiers) flexClasses += ` uk-flex-${wrapModifiers}`
  else if (wrapModifiersAlignment) flexClasses += ` uk-flex-${wrapModifiersAlignment}`
  else if (horizontalAlignement) flexClasses += ` uk-flex-${horizontalAlignement}`
  else if (verticalAlignement) flexClasses += ` uk-flex-${verticalAlignement}`
  else if (directionModifiers) flexClasses += ` uk-flex-${directionModifiers}`
  else if (itemOrder) flexClasses += ` uk-flex-${itemOrder}`
  else if (itemDimensions) flexClasses += ` uk-flex-${itemDimensions}`

  return (
    <div
      className={flexClasses}
    >
      {children}
    </div>
  )
}

Flex.propTypes = {
  children: PropTypes.node,
  isInline: PropTypes.bool.isRequired,
  horizontalAlignement: PropTypes.oneOf([
    'left',
    'left@s',
    'left@m',
    'left@l',
    'left@xl',
    'center',
    'center@s',
    'center@m',
    'center@l',
    'center@xl',
    'right',
    'right@s',
    'right@m',
    'right@l',
    'right@xl',
    'between',
    'between@s',
    'between@m',
    'between@l',
    'between@xl',
    'around',
    'around@s',
    'around@m',
    'around@l',
    'around@xl'
  ]),
  verticalAlignement: PropTypes.oneOf([
    'stretch',
    'top',
    'middle',
    'bottom'
  ]),
  directionModifiers: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]),
  wrapModifiers: PropTypes.oneOf([
    'wrap',
    'wrap-reverse',
    'nowrap'
  ]),
  wrapModifiersAlignment: PropTypes.oneOf([
    'wrap-stretch',
    'wrap-between',
    'wrap-around',
    'wrap-top',
    'wrap-middle',
    'wrap-bottom'
  ]),
  itemOrder: PropTypes.oneOf([
    'first',
    'first@s',
    'first@m',
    'first@l',
    'first@xl',
    'last',
    'last@s',
    'last@m',
    'last@l',
    'last@xl'
  ]),
  itemDimensions: PropTypes.oneOf([
    'none',
    'auto',
    '1'
  ])
}

export default Flex
