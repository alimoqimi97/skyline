import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Contact from './Contact';

export const attributes = {

};

export const actions = {

}

storiesOf("Contact", module)
.add("Test",() => (
    <Contact />
))