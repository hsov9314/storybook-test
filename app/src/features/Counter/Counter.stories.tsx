import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fireEvent, within } from '@storybook/testing-library'
import { Counter } from './Counter'
import { expect } from '@storybook/jest'

export default {
  title: 'Counter',
  component: Counter
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = () => <Counter />

export const Main = Template.bind({})

Main.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  expect(canvas.getByText('0')).toBeInTheDocument()

  await fireEvent.click(canvas.getByText('+'))
  await fireEvent.click(canvas.getByText('+'))

  expect(canvas.getByText('2')).toBeInTheDocument()

  await fireEvent.click(canvas.getByText('-'))
  await fireEvent.click(canvas.getByText('-'))

  expect(canvas.getByText('0')).toBeInTheDocument()
}
