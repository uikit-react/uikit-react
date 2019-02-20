import React from 'react'
import { storiesOf } from '@storybook/react'

import { Section } from '../src/components'

storiesOf('Section', module)
  .add('Default', () => (
    <Section>
      <div className='uk-container'>
        <h3>Section</h3>
        <div className='uk-grid-match uk-child-width-1-3@m' uk-grid>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </Section>
  ))
  .add('Muted', () => (
    <Section styleModifiers='muted'>
      <div className='uk-container'>
        <h3>Section</h3>
        <div className='uk-grid-match uk-child-width-1-3@m' uk-grid>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </Section>
  ))
  .add('Primary', () => (
    <Section styleModifiers='primary'>
      <div className='uk-container'>
        <h3>Section</h3>
        <div className='uk-grid-match uk-child-width-1-3@m' uk-grid>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </Section>
  ))
  .add('Secondary', () => (
    <Section styleModifiers='secondary'>
      <div className='uk-container'>
        <h3>Section</h3>
        <div className='uk-grid-match uk-child-width-1-3@m' uk-grid>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </Section>
  ))
  .add('Sizes', () => (
    <div>
      <Section styleModifiers='primary' sizeModifier='xsmall' overlap>
        <div className='uk-container'>
          <h3>xsmall</h3>
          <div className='uk-grid-match uk-child-width-1-3@m' uk-grid>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section styleModifiers='secondary' sizeModifier='small' overlap>
        <div className='uk-container'>
          <h3>small</h3>
          <div className='uk-grid-match uk-child-width-1-3@m' uk-grid>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section styleModifiers='primary' sizeModifier='large' overlap>
        <div className='uk-container'>
          <h3>large</h3>
          <div className='uk-grid-match uk-child-width-1-3@m' uk-grid>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section styleModifiers='secondary' sizeModifier='xlarge' overlap>
        <div className='uk-container'>
          <h3>xlarge</h3>
          <div className='uk-grid-match uk-child-width-1-3@m' uk-grid>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  ))
