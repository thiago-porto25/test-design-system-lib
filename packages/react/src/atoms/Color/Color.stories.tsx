import React from 'react';
import { Color } from '.';
import { ColorProps } from './Color';

import '@thiago.tds/scss/lib/Utilities.css';

export default {
  title: 'Atoms/Color',
  component: Color,
};

const Template = (args: ColorProps) => <Color {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: '#ff0000',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  color: '#000',
  width: 'xxxl',
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
  color: '#009',
  height: 'xxxl',
};
