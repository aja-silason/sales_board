import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModel } from 'src/app/domain/user/model/user.model';
import { databaseProviders } from './database.providers';


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],

            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: 'localhost',
                username: 'sales',
                password: 'sales',
                port: 5432,
                database: 'salesboard',
                /*
                url: 'DATABASE_URL',
                host: configService.get('DATABASE_HOST', 'localhost'),
                username: configService.get('DATABASE_USER', 'sales'),
                password: configService.get('DATABASE_PASSWORD', 'sales'),
                port: Number(configService.get('DATABASE_PORT', 5432)),
                database: configService.get('DATABASE_DB', 'salesboard'),*
                entities: [UserModel],
                synchronize: true,*/
            })
        }),
        UserModel,
    ]
    

    /*providers: [...databaseProviders],
    exports: [...databaseProviders]*/
})
export class DatabaseModule {}
