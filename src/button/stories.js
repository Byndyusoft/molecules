import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import Button from '.';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => {
    const text = 'Button';

    return (
        <Button>{ text }</Button>
    );
});
