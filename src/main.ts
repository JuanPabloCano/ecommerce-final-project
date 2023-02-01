import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './application/modules/app.module';
import { OpenApi } from './application/swagger/OpenApi';

const PORT = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = OpenApi.swaggerConfig(app);
  SwaggerModule.setup('/', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true
    }),
  );
  await app.listen(PORT, () => Logger.log(`Open server on http://localhost:${ PORT }/`));
}

(async () => bootstrap())();
