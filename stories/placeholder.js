import React from 'react'
import { storiesOf } from '@storybook/react'

import { Placeholder } from '../src/components'

storiesOf('Placeholder', module)
  .add('placeholder', () => (
    <Placeholder className='uk-text-center'>Placeholder</Placeholder>
  ))
