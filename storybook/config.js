import { configure, addDecorator } from '@kadira/storybook';
import container from './container';
import './styles.css';

const req = require.context('../src', true, /stories.js$/);

/* eslint-disable global-require */
function loadStories() {
    req.keys().forEach(filename => req(filename));
}
/* eslint-enable global-require */

addDecorator(container);
configure(loadStories, module);
