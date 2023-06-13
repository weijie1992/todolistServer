import userDb from '../databases/user-db'
import jwt from 'jsonwebtoken'
import Koa from 'koa'
// import 'dotenv/config'

const { users } = userDb

// const signUp = async (email: string, password: string): Promise<string> => {
async function signUp(email: string, password: string, ctx: Koa.Context) {
  // to be replace when db has wired up
  return new Promise((resolve, reject) => {
    console.log('🚀 ~ file: auth.ts:26 ~ signUp ~ Promise:')
    setTimeout(() => {
      const exist = users.find(u => u.email === email)
      console.log('🚀 ~ file: auth.ts:11 ~ setTimeout ~ exist:')
      if (!exist) {
        const userId = (Math.random() * 10000).toFixed()
        users.push({
          id: userId,
          email,
          password
        })
        console.log('User db :', users)
        _signToken(userId, ctx)
        resolve(userId)
      }
      reject('User Already Exists')
    }, 2000)
  })
}

async function login(email: string, password: string, ctx: Koa.Context) {
  console.log('🚀 ~ file: auth.ts:29 ~ login ~ password:', password)
  console.log('🚀 ~ file: auth.ts:29 ~ login ~ email:', email)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.email === email)
      if (user && user.password === password) {
        _signToken(user.id, ctx)
        resolve('Login successful')
      }
      reject('Login failed')
    }, 2000)
  })
}

const _signToken = (userId: string, ctx: Koa.Context) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as jwt.Secret)
  ctx.cookies.set('auth', token, { httpOnly: true })
}

const verifyUser = (ctx: Koa.Context) => {
  const authCookie: string | undefined = ctx.cookies.get('auth')
  if (authCookie) {
    return jwt.verify(authCookie, process.env.JWT_SECRET as jwt.Secret)
  }
  return 'Auth Error'
}

export default { signUp, login, verifyUser }
