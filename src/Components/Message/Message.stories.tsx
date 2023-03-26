import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Message from './Message';

export const attributes = {

};

export const actions = {

}

storiesOf("Message", module)
.add("Test",() => (
    <Message />
))