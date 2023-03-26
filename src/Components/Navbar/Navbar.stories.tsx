import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navbar from './Navbar';

export const attributes = {

};

export const actions = {

}

storiesOf("Navbar", module)
.add("Test",() => (
    <Navbar />
))