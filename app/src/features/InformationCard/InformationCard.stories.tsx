import { ComponentMeta, ComponentStory } from '@storybook/react'
import { InformationCard } from './InformationCard'

export default {
  title: 'InformationCard',
  component: InformationCard
} as ComponentMeta<typeof InformationCard>

const Template: ComponentStory<typeof InformationCard> = () => <InformationCard />

export const Default = Template.bind({})
