import React from 'react'
import { storiesOf } from '@storybook/react'

import { Divider } from './../src/components'

storiesOf('Divider', module)
  .add('default', () => (
    <div style={{ marginTop: 32 }}>
      <Divider />
    </div>
  ))
  .add('icon', () => (
    <div style={{ marginTop: 32 }}>
      <Divider icon />
    </div>
  ))
  .add('small', () => (
    <div style={{ marginTop: 32 }}>
      <Divider small />
    </div>
  ))
  .add('vertical', () => (
    <Divider vertical />
  ))
