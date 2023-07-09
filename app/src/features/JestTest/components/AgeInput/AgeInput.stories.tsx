import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AgeInput } from './AgeInput'

export default {
  title: 'AgeInput',
  component: AgeInput
} as ComponentMeta<typeof AgeInput>

const Template: ComponentStory<typeof AgeInput> = (args) => <AgeInput {...args} />

export const Default = Template.bind({})
Default.args = {
  minAge: 0,
  maxAge: 130
}
