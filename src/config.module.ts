// 19:54 - Чтобы в nest читать переменные из .env, нужен модуль config.module.ts и инсталлировать пакет "npm i @nestjs/config --save"
//         Также для этого необходимо установить пакет: npm install dotenv
import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'


@Module({
  imports: [
    NestConfigModule.forRoot()
  ]
})
export class ConfigModule {}
