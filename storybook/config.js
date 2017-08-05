import { configure, addDecorator } from '@storybook/react';
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
