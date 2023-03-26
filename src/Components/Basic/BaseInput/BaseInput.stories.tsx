import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BaseInput from './BaseInput';

export const attributes = {

};

export const actions = {

}

storiesOf("BaseInput", module)
.add("Test",() => (
    <BaseInput />
))