import React from 'react'
import { storiesOf } from '@storybook/react'

import { Table } from '../src/components'

const data = [
  { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
  { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
  { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
]

storiesOf('Table', module)
  .add('default', () => (
    <Table data={data} />
  ))
  .add('divider', () => (
    <Table data={data} divider />
  ))
  .add('striped', () => (
    <Table data={data} striped />
  ))
  .add('hover', () => (
    <Table data={data} hover />
  ))
  .add('small', () => (
    <Table data={data} small />
  ))
  .add('large', () => (
    <Table data={data} large />
  ))
  .add('justify', () => (
    <Table data={data} justify />
  ))
