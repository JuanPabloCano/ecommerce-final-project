import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomError extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}