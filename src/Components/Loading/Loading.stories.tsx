import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Loading from './Loading';

export const attributes = {

};

export const actions = {

}

storiesOf("Loading", module)
.add("Test",() => (
    <Loading />
))