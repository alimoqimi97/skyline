import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MessageTextInput from './MessageTextInput';

export const attributes = {

};

export const actions = {

}

storiesOf("MessageTextInput", module)
.add("Test",() => (
    <MessageTextInput />
))