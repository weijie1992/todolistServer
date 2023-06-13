import Koa from 'koa'
import auth from '../services/auth'
import { User } from 'src/types/users'

const signUp = async (ctx: Koa.Context, next: Koa.Next) => {
  try {
    const { email, password }: User = ctx.request.body as User
    const results = await auth.signUp(email, password)
    ctx.body = {
      success: true,
      results
    }
  } catch (err) {
    console.log('🚀 ~ file: auth.ts:15 ~ signUp ~ err:', err)
  }
}

export default { signUp }
