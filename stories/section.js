import React from 'react'
import { storiesOf } from '@storybook/react'

import { Section } from '../src/components'

storiesOf('Section', module)
    .add('Default', () => (
        <Section modifiers="muted">
            <h3>Section</h3>
            <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
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
        </Section>
    ))