import React from 'react';

import { storiesOf } from '@storybook/react';
import MenuContainer from './menu';
import CheeseburgerMenu from '../Sidebar';

storiesOf( CheeseburgerMenu, module)
  .add('normal', () => <MenuContainer/>)
  .add('with skew', () => <MenuContainer menuProps={{ skewY: -5, bottomOffset: -30 }}/>)