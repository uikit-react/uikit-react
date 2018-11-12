import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tile } from '../src/components'

storiesOf('Tile', module)
  .add('Default', () => (
    <Tile
      children='Default'
      type='default'
    />
  ))
  .add('Muted', () => (
    <Tile
      children='Muted'
      type='muted'
    />
  ))
  .add('Primary', () => (
    <Tile
      children='Primary'
      type='primary'
    />
  ))
  .add('Secondary', () => (
    <Tile
      children='Secondary'
      type='secondary'
    />
  ))
  .add('Padding', () => (
    <div className='uk-child-width-1-3@s uk-grid-small uk-text-center uk-grid'>
      <div>
        <Tile
          children='Remove'
          type='muted'
          padding='remove'
        />
      </div>
      <div>
        <Tile
          children='Small'
          type='primary'
          padding='small'
        />
      </div>
      <div>
        <Tile
          children='Large'
          type='secondary'
          padding='large'
        />
      </div>
    </div>
  ))
