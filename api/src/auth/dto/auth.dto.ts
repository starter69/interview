import { IsNotEmpty, IsString } from 'class-validator'

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  password: string
}

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  password: string

  team_id: number
}
