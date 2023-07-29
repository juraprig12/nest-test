import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => console.log('Server start on PORT 3000'));
}
bootstrap();

// Описание функционала файлов кода в nestjs в 1-ом видео с 12:00  
// Про docker-compose во 2-ом уроке на 6:40. Создается Контейнер командой:  docker-compose up -d --build
// создание, конфигурация, организация модулей, которые будут ассоциированы с таблицами в Базе Данных - 2-ое Видео 10:00
// Path Intellisense - расширение которые продолжает (подсказывает), автодополняет пути к импортируемым модулям, пакетам.
// Описание модуля typeorm.module.ts во 2-ом видео с 17:30
// 19:54 - чтобы в nest читать переменные окружения из .env нужен модуль config.module.ts и инсталлировать пакет "npm i @nestjs/config --save"

// 3 Видео закончил смотреть на 09:06