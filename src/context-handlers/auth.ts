import Koa from 'koa'
import auth from '../services/auth'
import { User } from 'src/types/users'

const signUp = async (ctx: Koa.Context, next: Koa.Next) => {
  try {
    const { email, password }: User = ctx.request.body as User
    const results = await auth.signUp(email, password, ctx)
    ctx.body = {
      success: true,
      results
    }
  } catch (err) {
    console.log('🚀 ~ file: auth.ts:15 ~ signUp ~ err:', err)
  }
}

const login = async (ctx: Koa.Context) => {
  try {
    console.log('🚀 ~ file: auth.ts:19 ~ login ~ ctx:', ctx)

    const { email, password }: User = ctx.request.body as User
    const results = await auth.login(email, password, ctx)
    ctx.body = {
      success: true,
      results
    }
  } catch (err) {
    console.log('🚀 ~ file: auth.ts:26 ~ login ~ err:', err)
  }
}

const verifyUser = (ctx: Koa.Context) => {
  // console.log('🚀 ~ file: auth.ts:34 ~ verifyUser ~ ctx:', ctx)
  const results = auth.verifyUser(ctx)
  ctx.body = {
    sucess: true,
    results
  }
}

export default { signUp, login, verifyUser }
