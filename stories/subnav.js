import React from 'react'
import { storiesOf } from '@storybook/react'

import { Subnav, SubnavItem } from '../src/components'

storiesOf('Subnav', module)
  .add('Default', () => (
    <Subnav className='uk-margin'>
      <SubnavItem children='Active' active />
      <SubnavItem children='Item' />
      <SubnavItem children='Item' />
      <SubnavItem children='Disabled' disabled />
    </Subnav>
  ))
  .add('Divider', () => (
    <Subnav
      className='uk-margin'
      divider
    >
      <SubnavItem children='Active' active />
      <SubnavItem children='Item' />
      <SubnavItem children='Item' />
    </Subnav>
  ))
  .add('Pill', () => (
    <Subnav pill>
      <SubnavItem children='Active' active />
      <SubnavItem children='Item' />
      <SubnavItem children='Item' />
    </Subnav>
  ))
