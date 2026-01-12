import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './dynamic/dynamic.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [DatabaseModule.forRoot({ dbName: 'nestjs' }), AppGateway],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
