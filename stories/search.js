import React from 'react'
import { storiesOf } from '@storybook/react'

import { Search } from '../src/components'

storiesOf('Search', module)
  .add('Default', () => (
    <Search
      placeholder='Default'
    />
  ))
  .add('Icon', () => (
    <Search
      placeholder='Default'
      withIcon
    />
  ))
  .add('Icon clickable', () => (
    <Search
      placeholder='Default'
      withIconClickable
    />
  ))
  .add('Navbar modifier', () => (
    <Search
      placeholder='Default'
      withIconClickable
      modifier='navbar'
    />
  ))
