---
to: <%= absPath %>/<%= Component_name %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import <%= Component_name %>, { <%= Component_name %>Props } from './<%= Component_name %>'

const meta = {
  title: 'components/<%= Component_name %>',
  component: <%= Component_name %>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof <%= Component_name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: '<%= component_name %>'
  },
};
