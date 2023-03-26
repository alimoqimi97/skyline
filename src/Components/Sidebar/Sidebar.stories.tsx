import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Sidebar from './Sidebar';

export const attributes = {

};

export const actions = {

}

storiesOf("Sidebar", module)
.add("Test",() => (
    <Sidebar />
))