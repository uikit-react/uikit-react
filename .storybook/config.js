import { configure } from '@storybook/react';

// Import uikit css for now
import '../node_modules/uikit/dist/css/uikit.min.css'

const req = require.context('../stories', true, /.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
