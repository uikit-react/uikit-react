import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Flex from './../src/components/Flex'
import { Button } from './../src/components/Button'

storiesOf('Flex', module)
  .add('Standard', () => (
    <Flex isInline={false}>
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
  .add('Horizontal alignment', () => (
    <Flex
      horizontalAlignement='center'
      isInline={false}
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
  .add('Responsive', () => (
    <Flex
      horizontalAlignement='right@l'
      isInline={false}
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
  .add('Vertical alignment', () => (
    <Flex
      verticalAlignement='middle'
      isInline={false}
    >
      <Button
        children='Button1'
        onClick={action('clicked')}
      />
      <Button
        children='dsfkjsdjfmlsdjfsdjfmsdwcljdmvjdlxmdv,bgdlskdxc,vnlkbd:rsdkclvxnkxlfvgkjldvckjfhjvfkdjvxklcjdvfjkfdxklvdjsxlvklmvdjmfkx
        dksfjdlfjskfjsldfjslfdskldfkj'
        onClick={action('clicked')}
      />
      <Button
        children='Button3'
        onClick={action('clicked')}
      />
    </Flex>
  ))
  .add('Direction modifiers', () => (
    <Flex
      directionModifiers='column'
      isInline={false}
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
  .add('Wrap modifiers', () => (
    <Flex
      wrapModifiers='wrap'
      wrapModifiersAlignment='wrap-around'
      isInline={false}
    >
      <Button
        children='Ici on met beaucoup de texte'
        onClick={action('clicked')}
      />
      <Button
        children='Histoire de voir comment ca change !'
        onClick={action('clicked')}
      />
      <Button
        children='Button3'
        onClick={action('clicked')}
      />
    </Flex>
  ))
  .add('Item Order', () => (
    <Flex isInline={false}>
      <Flex
        itemOrder='last'
        isInline={false}
      >
        <Button
          children='Button1'
          onClick={action('clicked')}
        />
      </Flex>
      <Button
        children='Button2'
        onClick={action('clicked')}
      />
      <Flex
        itemOrder='first'
        isInline={false}
      >
        <Button
          children='Button3'
          onClick={action('clicked')}
        />
      </Flex>
    </Flex>
  ))
