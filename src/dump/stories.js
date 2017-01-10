import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import Dump from '.';

const stories = storiesOf('Dump component', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => {
    const text = 'Dump component';

    return (
        <Dump>{ text }</Dump>
    );
});
