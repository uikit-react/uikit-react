import React from 'react'
import { storiesOf } from '@storybook/react'

import Badge from './../src/components/Badge'

storiesOf('Badge', module)
  .add('standard', () => (
    <Badge
      children='GO !'
    />
  ))
