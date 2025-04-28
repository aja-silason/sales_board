import { UserModel } from 'src/app/domain/user/model/user.model';
import {DataSource} from 'typeorm'

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
              type: 'postgres',
              host: 'localhost',
              username: 'sales',
              password: 'sales',
              port: 5432,
              database: 'salesboard',

              entities: [UserModel],
              synchronize: true,
            });
      
            return dataSource.initialize();
          },
    }
]