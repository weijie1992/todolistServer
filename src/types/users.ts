export interface UserDb {
  id: string
  email: string
  password: string
}
export type User = Omit<UserDb, 'id'>
