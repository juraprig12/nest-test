import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { UserModule } from '@entities/user/user.module';
import { TypeOrmModule } from '@db/typeorm.module';
import { ConfigModule } from './config.module';
//import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,    
    UserModule,
    TypeOrmModule,
  ],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
