import { Body, Controller, Post } from '@nestjs/common';
import { AuthUseCases } from '../../../../domain/useCases/auth/auth.usecases';
import { ApiTags } from '@nestjs/swagger';
import { RegisterDTO } from '../../../driven-adapters/mongoDB/auth/data/Register.dto';
import { Register } from '../../../../domain/models/auth/Register';
import { LoginDTO } from '../../../driven-adapters/mongoDB/auth/data/Login.dto';

@ApiTags('auth')
@Controller('/api/auth')
export class AuthHandler {
  constructor(private readonly authUseCases: AuthUseCases) {}

  @Post('/register')
  public async registerUser(@Body() user: RegisterDTO): Promise<Register> {
    try {
      return await this.authUseCases.registerUser(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Post('/login')
  public async login(@Body() user: LoginDTO): Promise<LoginDTO> {
    try {
      return await this.authUseCases.login(user);
    } catch (error) {
      throw new Error(error);
    }
  }
}
