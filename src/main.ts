import { NestFactory } from '@nestjs/core';
import { ShootingLocationModule} from "./ShootingLocation.module";
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ShootingLocationModule);
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || 8080;
  await app.listen(port);
}
bootstrap();
