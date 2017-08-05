import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button', () => {
    it('Renders the button', () => {
        const button = shallow(<Button>Button</Button>);

        expect(button).to.have.length(1);
    });
});
