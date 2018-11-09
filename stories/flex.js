import React from 'react'
import { storiesOf } from '@storybook/react'

import { Flex } from './../src/components'

const fakeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam est, tempor vitae facilisis facilisis, tempor eu diam. Morbi vel semper est. Integer a felis et neque scelerisque pharetra. Donec interdum felis eu convallis vestibulum. Integer nec lorem sit amet orci luctus feugiat non nec libero. Donec hendrerit tellus a nisi ullamcorper tincidunt. Fusce tincidunt accumsan eros, id lacinia nulla dignissim non. Quisque at magna vitae metus hendrerit pellentesque.'

storiesOf('Flex', module)
  .add('Standard', () => (
    <Flex isInline={false}>
      <div className='uk-card uk-card-default uk-card-body'>Item 1</div>
      <div className='uk-card uk-card-default uk-card-body uk-margin-left'>Item 2</div>
      <div className='uk-card uk-card-default uk-card-body uk-margin-left'>Item 3</div>
    </Flex>
  ))
  .add('Horizontal alignment', () => (
    <Flex
      horizontalAlignement='center'
      isInline={false}
    >
      <div className='uk-card uk-card-default uk-card-body'>Item 1</div>
      <div className='uk-card uk-card-default uk-card-body uk-margin-left'>Item 2</div>
      <div className='uk-card uk-card-default uk-card-body uk-margin-left'>Item 3</div>
    </Flex>
  ))
  .add('Responsive', () => (
    <Flex
      horizontalAlignement='right@l'
      isInline={false}
    >
      <div className='uk-card uk-card-default uk-card-body'>Item 1</div>
      <div className='uk-card uk-card-default uk-card-body uk-margin-left'>Item 2</div>
      <div className='uk-card uk-card-default uk-card-body uk-margin-left'>Item 3</div>
    </Flex>
  ))
  .add('Vertical alignment', () => (
    <Flex
      verticalAlignement='middle'
      isInline={false}
    >
      <div className='uk-card uk-card-default uk-card-body'>Item 1</div>
      <div className='uk-card uk-card-default uk-card-body uk-margin-left'>{fakeText}</div>
      <div className='uk-card uk-card-default uk-card-body uk-margin-left'>Item 3</div>
    </Flex>
  ))
  .add('Direction modifiers', () => (
    <Flex
      directionModifiers='column uk-width-1-3'
      isInline={false}
    >
      <div className='uk-card uk-card-default uk-card-body'>Item 1</div>
      <div className='uk-card uk-card-default uk-card-body uk-margin-top'>Item 2</div>
      <div className='uk-card uk-card-default uk-card-body uk-margin-top'>Item 3</div>
    </Flex>
  ))
  .add('Wrap modifiers', () => (
    <Flex
      wrapModifiers='wrap'
      wrapModifiersAlignment='wrap-around uk-background-muted uk-height-medium' // just for the story
    >
      <div className='uk-width-1-3 uk-card uk-card-default uk-card-body uk-card-small'>Item 1</div>
      <div className='uk-width-1-2 uk-card uk-card-default uk-card-body uk-card-small uk-margin-left'>Item 2</div>
      <div className='uk-width-1-3 uk-card uk-card-default uk-card-body uk-card-small'>Item 3</div>
      <div className='uk-width-1-3 uk-card uk-card-default uk-card-body uk-card-small uk-margin-left'>Item 4</div>
      <div className='uk-width-1-2 uk-card uk-card-default uk-card-body uk-card-small'>Item 5</div>
      <div className='uk-width-1-3 uk-card uk-card-default uk-card-body uk-card-small uk-margin-left'>Item 6</div>
    </Flex>
  ))
  .add('Item Order', () => (
    <Flex isInline={false}>
      <div className='uk-card uk-card-default uk-card-body uk-flex-last uk-margin-left'>Item 1</div>
      <div className='uk-card uk-card-default uk-card-body uk-flex-first'>Item 2</div>
      <div className='uk-card uk-card-default uk-card-body uk-margin-left'>Item 3</div>
    </Flex>
  ))
