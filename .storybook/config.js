import { configure } from '@storybook/react';
import Uikit from 'uikit'

// Import uikit css for now
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.css'
Uikit.use(Icons)

const req = require.context('../stories', true, /.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
