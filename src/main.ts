import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/modules/app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { OpenApi } from './application/swagger/OpenApi';

const PORT = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = OpenApi.swaggerConfig(app);
  SwaggerModule.setup('api', app, document);
  await app.listen(PORT, () => console.log(`Open server on http://localhost:${PORT}/api`));
}

bootstrap();
