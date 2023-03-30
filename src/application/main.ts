import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';
import { UTIL } from './shared/enums/Util';
import { OpenApi } from './swagger/OpenApi';

const PORT = process.env.PORT || UTIL.PORT;

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
