import { IsNotEmpty, IsNumber, IsPositive, IsUrl, MaxLength, MinLength } from 'class-validator';
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
  @IsPositive()
  readonly code: number;

  @ApiProperty()
  @IsUrl()
  readonly picture: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  readonly price: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;
}
