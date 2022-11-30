import { NestFactory } from '@nestjs/core';
import { ShootingLocationModule} from "./ShootingLocation.module";
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ShootingLocationModule);
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT;
  await app.listen(port); //ou est ce que tu définis port ?? perso dans mon code j'avais mis 3000, et dans postman aussi du coup c'etait localhost:3000
}
bootstrap();
