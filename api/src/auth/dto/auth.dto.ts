import { IsNotEmpty, IsString } from 'class-validator'

export class AuthDTO {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  password: string
}
