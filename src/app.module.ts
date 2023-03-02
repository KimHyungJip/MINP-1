import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.config.service';

@Module({
  imports: [
    // 제일 먼저 보이는 모듈에 db접속정보가 다 보이니까 감춰
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      useClass:TypeOrmConfigService
    }),
    UsersModule,
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
