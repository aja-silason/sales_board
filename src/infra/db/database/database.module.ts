import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModel } from 'src/app/domain/user/model/user.model';
import { UserModule } from 'src/infra/http/user/user.module';
import { RoleModel } from 'src/app/domain/role/model/role.model';
import { RoleModule } from 'src/infra/http/role/role.module';
import { EmployeeModule } from 'src/infra/http/employee/employee.module';
import { EmployeeModel } from 'src/app/domain/employee/model/employee.model';
import { ProductModel } from 'src/app/domain/product/model/product.model';
import { ProductModule } from 'src/infra/http/product/product.module';
import { StockModel } from 'src/app/domain/stock/model/stock.model';
import { StockModule } from 'src/infra/http/stock/stock.module';
import { ClientModel } from 'src/app/domain/client/model/client.model';
import { ClientModule } from 'src/infra/http/client/client.module';


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],

            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DATABASE_HOST', 'localhost'),
                username: configService.get('DATABASE_USER', 'sales'),
                password: configService.get('DATABASE_PASSWORD', 'sales'),
                port: Number(configService.get('DATABASE_PORT', 5432)),
                database: configService.get('DATABASE_DB', 'salesboard'),
                
                entities: [
                    UserModel, RoleModel, EmployeeModel, ProductModel, StockModel, ClientModel
                ],
                synchronize: true,
            })
        }),
        UserModule,
        RoleModule,
        EmployeeModule,
        ProductModule,
        StockModule,
        ClientModule
    ]
    
})
export class DatabaseModule {}
