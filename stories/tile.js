import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tile } from '../src/components'

storiesOf('Tile', module)
  .add('Default', () => (
    <Tile
      children={<p className='uk-h4'>Default</p>}
      type='default'
    />
  ))
  .add('Muted', () => (
    <Tile
      children={<p className='uk-h4'>Muted</p>}
      type='muted'
    />
  ))
  .add('Primary', () => (
    <Tile
      children={<p className='uk-h4'>Primary</p>}
      type='primary'
    />
  ))
  .add('Secondary', () => (
    <Tile
      children={<p className='uk-h4'>Secondary</p>}
      type='secondary'
    />
  ))
  .add('Padding', () => (
    <div className='uk-child-width-1-3@s uk-grid-small uk-text-center uk-grid'>
      <div>
        <Tile
          children={<p className='uk-h4'>Remove</p>}
          type='muted'
          padding='remove'
        />
      </div>
      <div>
        <Tile
          children={<p className='uk-h4'>Small</p>}
          type='primary'
          padding='small'
        />
      </div>
      <div>
        <Tile
          children={<p className='uk-h4'>Large</p>}
          type='secondary'
          padding='large'
        />
      </div>
    </div>
  ))
