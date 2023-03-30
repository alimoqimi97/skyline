import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './Input';

export const attributes = {

};

export const actions = {

}

storiesOf("Input", module)
.add("Test",() => (
    <Input />
))