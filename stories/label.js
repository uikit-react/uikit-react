import React from 'react'
import { storiesOf } from '@storybook/react'

import Label from './../src/components/Label'

storiesOf('Label', module)
  .add('Standard', () => (
    <Label
      label='Standard'
    />
  ))
  .add('Succes', () => (
    <Label
      label='Succes'
      type='success'
    />
  ))
  .add('Warning', () => (
    <Label
      label='Warning'
      type='warning'
    />
  ))
  .add('Danger', () => (
    <Label
      label='Danger'
      type='danger'
    />
  ))
