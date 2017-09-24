import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Input from '.';

describe('Button', () => {
    it('Renders the input', () => {
        const input = shallow(<Input name="field" />);

        expect(input).to.have.length(1);
    });
});
