import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

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

  @IsNumber()
  @IsOptional()
  team_id: number | null
}
