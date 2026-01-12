// database.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { DATABASE_OPTIONS } from './constants';
import type { DatabaseModuleOptions } from './dynamic-options.interface';

@Injectable()
export class DatabaseService {
  private dbConnection: any; // e.g., a TypeORM Connection object

  constructor(@Inject(DATABASE_OPTIONS) private options: DatabaseModuleOptions) {
    this.connectToDatabase(options);
  }

  private connectToDatabase(options: DatabaseModuleOptions) {
    // Use the options (e.g., options.dbName) to establish the connection
    console.log(`Connecting to database: ${options.dbName}`);
    // implementation of database connection
  }

  // other service methods
}
