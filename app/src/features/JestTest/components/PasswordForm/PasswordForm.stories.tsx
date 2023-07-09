import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PasswordForm } from './PasswordForm'

export default {
  title: 'PasswordForm',
  component: PasswordForm
} as ComponentMeta<typeof PasswordForm>

const Template: ComponentStory<typeof PasswordForm> = (args) => <PasswordForm {...args} />
export const Default = Template.bind({})
Default.args = {
  minLength: 8,
  maxLength: 20
}
