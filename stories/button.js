import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '../src/components'

storiesOf('Button', module)
  .add('standard', () => (
    <Button onClick={action('clicked')}>button</Button>
  ))
  .add('disabled', () => (
    <Button
      onClick={action('clicked')}
      disabled
    >
      disabled
    </Button>
  ))
  .add('primary', () => (
    <Button
      onClick={action('clicked')}
      type='primary'
    >
      primary
    </Button>
  ))
