import { NestFactory } from '@nestjs/core';
import { config as dotenvConfig } from 'dotenv';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
dotenvConfig({ path: '.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Todo example')
    .setDescription('Todo API example')
    .setVersion('1.0')
    .addTag('todos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.DB_PORT);
}
bootstrap();
