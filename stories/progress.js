import React from 'react'
import { storiesOf } from '@storybook/react'

import { Progress } from '../src/components'

storiesOf('Progress', module)
  .add('progress', () => (
    <Progress value={30} max={100} />
  ))
