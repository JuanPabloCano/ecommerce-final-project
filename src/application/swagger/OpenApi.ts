import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export class OpenApi {

  public static swaggerConfig(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Eccomerce')
      .setDescription('The eccomerce API description')
      .setVersion('1.0')
      .addTag('Products')
      .build();
    return SwaggerModule.createDocument(app, config);
  }
}
