import React from 'react'
import { storiesOf } from '@storybook/react'

import { Heading } from './../src/components'

storiesOf('Heading', module)
  .add('variants', () => (
    <div>
      <Heading variant='h1'>h1 Heading 1</Heading>
      <Heading variant='h2'>h2 Heading 2</Heading>
      <Heading variant='h3'>h3 Heading 3</Heading>
      <Heading variant='h4'>h4 Heading 4</Heading>
      <Heading variant='h5'>h5 Heading 5</Heading>
      <Heading variant='h6'>h6 Heading 6</Heading>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <Heading size='small'>small</Heading>
      <Heading size='medium'>medium</Heading>
      <Heading size='large'>large</Heading>
      <Heading size='xlarge'>xlarge</Heading>
      <Heading size='2xlarge'>2xlarge</Heading>
    </div>
  ))
  .add('divider', () => (
    <div>
      <Heading variant='h1' divider>h1 Heading Divider</Heading>
      <Heading variant='h2' divider>h2 Heading Divider</Heading>
      <Heading variant='h3' divider>h3 Heading Divider</Heading>
      <Heading variant='h4' divider>h4 Heading Divider</Heading>
      <Heading variant='h5' divider>h5 Heading Divider</Heading>
      <Heading variant='h6' divider>h6 Heading Divider</Heading>
    </div>
  ))
  .add('bullet', () => (
    <div>
      <Heading variant='h1' bullet>h1 Heading Bullet</Heading>
      <Heading variant='h2' bullet>h2 Heading Bullet</Heading>
      <Heading variant='h3' bullet>h3 Heading Bullet</Heading>
      <Heading variant='h4' bullet>h4 Heading Bullet</Heading>
      <Heading variant='h5' bullet>h5 Heading Bullet</Heading>
      <Heading variant='h6' bullet>h6 Heading Bullet</Heading>
    </div>
  ))
  .add('line', () => (
    <div>
      <Heading variant='h1' line>h1 Heading Line</Heading>
      <Heading variant='h1' line className='uk-text-center'>h1 Heading Line</Heading>
      <Heading variant='h1' line className='uk-text-right'>h1 Heading Line</Heading>
    </div>
  ))
