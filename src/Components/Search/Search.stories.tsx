import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Search from './Search';

export const attributes = {

};

export const actions = {

}

storiesOf("Search", module)
.add("Test",() => (
    <Search />
))