import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BaseButton from './BaseButton';

export const attributes = {

};

export const actions = {

}

storiesOf("BaseButton", module)
.add("Test",() => (
    <BaseButton />
))