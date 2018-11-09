import React from 'react'
import { storiesOf } from '@storybook/react'

import { Label } from './../src/components'

storiesOf('Label', module)
  .add('Standard', () => (
    <Label
      children='Standard'
    />
  ))
  .add('Succes', () => (
    <Label
      children='Succes'
      type='success'
    />
  ))
  .add('Warning', () => (
    <Label
      children='Warning'
      type='warning'
    />
  ))
  .add('Danger', () => (
    <Label
      children='Danger'
      type='danger'
    />
  ))
