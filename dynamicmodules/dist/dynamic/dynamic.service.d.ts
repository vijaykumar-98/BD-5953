import type { DatabaseModuleOptions } from './dynamic-options.interface';
export declare class DatabaseService {
    private options;
    private dbConnection;
    constructor(options: DatabaseModuleOptions);
    private connectToDatabase;
}
