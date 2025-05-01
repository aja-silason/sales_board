import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModel } from 'src/app/domain/user/model/user.model';
import { UserModule } from 'src/infra/http/user/user.module';
import { RoleModel } from 'src/app/domain/role/model/role.model';


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
                
                entities: [UserModel, RoleModel],
                synchronize: true,
            })
        }),
        UserModule,
    ]
    
})
export class DatabaseModule {}
