export type UserLoginRequest = {
  name: string
  password: string
}

export type UserRegisterRequest = UserLoginRequest & {
  team_id?: number
}

export type UserInfo = {
  id: number
  name: string
  team_id: number
  role: string
}

export type ReferenceType = {
  id: number
  name: string
}
