import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/modules/app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { OpenApi } from './application/swagger/OpenApi';
import { ValidationPipe } from '@nestjs/common';

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
  await app.listen(PORT, () =>
      console.log(`Open server on http://localhost:${ PORT }/`),
  );
}

(async () => bootstrap())();
