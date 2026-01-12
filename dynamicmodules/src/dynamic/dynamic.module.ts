// database.module.ts
import { Module, DynamicModule, Global } from '@nestjs/common';
import { DatabaseService } from './dynamic.service';
import { DATABASE_OPTIONS } from './constants';
import { DatabaseModuleOptions } from './dynamic-options.interface';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Global() 
@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {
  static forRoot(options: DatabaseModuleOptions): DynamicModule {
    return {
      module: DatabaseModule,
      imports:[ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: options.dbName,
        entities: [],
        synchronize: true, 
      }),
    }),],
      providers: [
        {
          provide: DATABASE_OPTIONS,
          useValue: options,
        },
        DatabaseService,
      ],
      exports: [DatabaseService],
    };
  }
}
