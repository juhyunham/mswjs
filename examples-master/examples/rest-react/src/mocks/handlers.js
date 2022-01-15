import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = JSON.parse(req.body)

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: username,
        lastName: 'Maverick',
      }),
    )
  }),
]
