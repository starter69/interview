export type UserLogInRequest = {
  name: string
  password: string
}

export type UserRegisterRequest = UserLogInRequest & {
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

export type InterviewType = {
  id: number
  user_id: number
  name: string
}
