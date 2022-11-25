import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDTO {
  @ApiProperty()
  readonly timestamp: Date;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  readonly name: string;

  @ApiProperty()
  @MinLength(10)
  @MaxLength(250)
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly code: number;

  @ApiProperty()
  readonly picture: string;

  @ApiProperty()
  @IsNumber()
  readonly price: number;

  @ApiProperty()
  @IsNumber()
  readonly stock: number;
}
