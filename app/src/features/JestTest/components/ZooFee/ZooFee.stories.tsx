import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ZooFee } from './ZooFee'

export default {
  title: 'ZooFee',
  component: ZooFee
} as ComponentMeta<typeof ZooFee>

const Template: ComponentStory<typeof ZooFee> = () => <ZooFee />
export const Default = Template.bind({})
