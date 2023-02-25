import { rest } from 'msw'

export const handlers = [
  rest.get(`https://sample.com/api`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Hello Storybook'
      })
    )
  })
]
