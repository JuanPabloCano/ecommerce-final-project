import { IsNotEmpty } from 'class-validator';
import { LoginDTO } from './Login.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDTO extends LoginDTO {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}
