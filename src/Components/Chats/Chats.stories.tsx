import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Chats from './Chats';

export const attributes = {

};

export const actions = {

}

storiesOf("Chats", module)
.add("Test",() => (
    <Chats />
))