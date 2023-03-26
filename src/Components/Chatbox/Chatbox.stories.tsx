import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Chatbox from './Chatbox';

export const attributes = {

};

export const actions = {

}

storiesOf("Chatbox", module)
.add("Test",() => (
    <Chatbox />
))