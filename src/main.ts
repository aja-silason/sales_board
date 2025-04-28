import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = app.useGlobalPipes(new ValidationPipe({transform: true}));
  //const port: any = config.get<number>('3000');
  const port = 3000;
  
  await app.listen(port, async () => {
    logger.log(`Server is running on port: ${port}`)
  });

}

bootstrap();
