import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Messages from './Messages';

export const attributes = {

};

export const actions = {

}

storiesOf("Messages", module)
.add("Test",() => (
    <Messages />
))