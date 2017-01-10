import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Dump from '.';

describe('components/dump', () => {
    it('renders without errors', () => {
        const dump = shallow(<Dump><div /></Dump>);

        expect(dump).to.have.length(1);
    });
});
