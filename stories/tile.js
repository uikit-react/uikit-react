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
