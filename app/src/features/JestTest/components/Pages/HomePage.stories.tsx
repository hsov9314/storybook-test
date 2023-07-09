import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { HomePage } from './Pages'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => <HomePage />
export const Default = Template.bind({})
