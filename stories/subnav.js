import React from 'react'
import { storiesOf } from '@storybook/react'

import { Subnav } from '../src/components'

storiesOf('Subnav', module)
  .add('Default', () => (
    <Subnav>
      <li className='uk-active'><a href='#'>Active</a></li>
      <li><a href='#'>Item</a></li>
      <li><a href='#'>Item</a></li>
      <li><span>Disabled</span></li>
    </Subnav>
  ))
  .add('Divider', () => (
    <Subnav divider>
      <li className='uk-active'><a href='#'>Active</a></li>
      <li><a href='#'>Item</a></li>
      <li><a href='#'>Item</a></li>
    </Subnav>
  ))
  .add('Pill', () => (
    <Subnav pill>
      <li className='uk-active'><a href='#'>Active</a></li>
      <li><a href='#'>Item</a></li>
      <li><a href='#'>Item</a></li>
    </Subnav>
  ))
