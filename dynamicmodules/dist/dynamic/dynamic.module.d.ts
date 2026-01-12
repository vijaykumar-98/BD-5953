import { DynamicModule } from '@nestjs/common';
import { DatabaseModuleOptions } from './dynamic-options.interface';
export declare class DatabaseModule {
    static forRoot(options: DatabaseModuleOptions): DynamicModule;
}
