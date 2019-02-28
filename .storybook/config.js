import { configure } from '@storybook/react';

// Import uikit css for now
import '../node_modules/uikit/dist/css/uikit.min.css'
import '../node_modules/uikit/dist/js/uikit.js'
import '../node_modules/uikit/dist/js/uikit-icons.min.js'

const req = require.context('../stories', true, /.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
