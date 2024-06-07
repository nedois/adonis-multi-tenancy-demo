import vine from '@vinejs/vine'

export const store = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
    remember: vine.boolean().optional(),
  })
)
