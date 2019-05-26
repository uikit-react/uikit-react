import React from 'react'
import { storiesOf } from '@storybook/react'

import { Container } from './../src/components'
import './stories.css'

storiesOf('Container', module)
  .add('container', () => (
    <div>
      <Container className='container'>
        <p>container</p>
      </Container>
      <Container size='xsmall' className='container'>
        <p>xsmall</p>
      </Container>
      <Container size='small' className='container'>
        <p>small</p>
      </Container>
      <Container size='large' className='container'>
        <p>large</p>
      </Container>
      <Container size='expand' className='container'>
        <p>expand</p>
      </Container>
    </div>
  ))
