import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Card } from './Card'

export default {
  title: 'Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <p>Card</p>
}
