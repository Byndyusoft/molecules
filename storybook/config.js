import { configure } from '@kadira/storybook';

const req = require.context('../src', true, /stories.js$/);

/* eslint-disable global-require */
function loadStories() {
    req.keys().forEach(filename => req(filename));
}
/* eslint-enable global-require */

configure(loadStories, module);
