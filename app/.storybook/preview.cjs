import '../src/index.css'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { handlers } from '../mock/handler'

// Initialize MSW
initialize()

export const decorators = [mswDecorator]
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  msw: {
    handlers
  }
}
