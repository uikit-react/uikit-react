import React from 'react'
import { storiesOf } from '@storybook/react'

import { Breadcrumb, BreadcrumbItem } from '../src/components'

storiesOf('Breadcrumb', module)
  .add('breadcrumb', () => (
    <Breadcrumb>
      <BreadcrumbItem href='#'>Item</BreadcrumbItem>
      <BreadcrumbItem disabled>Disabled</BreadcrumbItem>
      <BreadcrumbItem>Active</BreadcrumbItem>
    </Breadcrumb>
  ))
