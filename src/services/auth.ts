import userDb from '../databases/user-db'

const { users } = userDb

// const signUp = async (email: string, password: string): Promise<string> => {
async function signUp(email: string, password: string) {
  // to be replace when db has wired up
  return new Promise(resolve => {
    console.log('🚀 ~ file: auth.ts:26 ~ signUp ~ Promise:')
    setTimeout(() => {
      const exist = users.find(u => u.email === email)
      console.log('🚀 ~ file: auth.ts:11 ~ setTimeout ~ exist:')
      if (!exist) {
        const id = (Math.random() * 10000).toFixed()
        users.push({
          id,
          email,
          password
        })
        console.log('User db :', users)
        resolve(id)
      }
      resolve('')
    }, 30000)
  })
}

export default { signUp }
