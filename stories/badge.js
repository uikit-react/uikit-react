import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Badge from './../src/components/Badge'

storiesOf('Badge', module)
  .add('test', () => (
    <Badge
      children='GO !'
      onClick={action('clicked !')}
    />
  ))
  .add('[skeleton]', () => (
    <Badge
      children='GO !'
      onClick={action('clicked !')}
      isLoading
    />
  ))
