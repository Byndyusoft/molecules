import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Input from '.';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

stories.add('Basic', () => {
    return (
        <Input
          type="text"
          name="field"
          onChange={action('Change!')}
          error={text('Error', '')}
          value={text('Value', 'Hello world!')}
          isDisabled={boolean('Disabled', false)}
        />
    );
});
