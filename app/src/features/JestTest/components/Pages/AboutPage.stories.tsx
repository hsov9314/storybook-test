import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AboutPage } from './Pages'

export default {
  title: 'Pages/AboutPage',
  component: AboutPage
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />
export const Default = Template.bind({})
