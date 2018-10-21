import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Flex from './../src/components/Flex'
import { Button } from './../src/components/Button'

storiesOf('Flex', module)
  .add('Standard', () => (
    <Flex>
      <Button
        children='Button1'
        onClick={action('clicked')}
      />
      <Button
        children='Button2'
        onClick={action('clicked')}
      />
      <Button
        children='Button3'
        onClick={action('clicked')}
      />
    </Flex>
  ))
  .add('Center Alignement', () => (
    <Flex
      horizontalAlignement='center'
    >
      <Button
        children='Button1'
        onClick={action('clicked')}
      />
      <Button
        children='Button2'
        onClick={action('clicked')}
      />
      <Button
        children='Button3'
        onClick={action('clicked')}
      />
    </Flex>
  ))
  .add('Around Alignement', () => (
    <Flex
      horizontalAlignement='around'
    >
      <Button
        children='Button1'
        onClick={action('clicked')}
      />
      <Button
        children='Button2'
        onClick={action('clicked')}
      />
      <Button
        children='Button3'
        onClick={action('clicked')}
      />
    </Flex>
  ))
