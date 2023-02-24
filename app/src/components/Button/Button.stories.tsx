import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  color: 'bg-blue-500'
}

export const Pink = Template.bind({})
Pink.args = {
  label: 'Button',
  color: 'bg-pink-500'
}

export const Green = Template.bind({})
Green.args = {
  label: 'Button',
  color: 'bg-green-500'
}
