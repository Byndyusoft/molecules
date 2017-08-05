import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Dump from '.';

const stories = storiesOf('Dump component', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => {
    const text = 'Dump component';

    return (
        <Dump>{ text }</Dump>
    );
});
